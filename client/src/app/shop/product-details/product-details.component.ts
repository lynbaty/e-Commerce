import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: IProduct;
  public quantity: number = 1;
  constructor(private shopService: ShopService,private activeRoute: ActivatedRoute, private bcservice: BreadcrumbService,private basketService: BasketService)  { 
    this.bcservice.set('@product','');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.shopService.getProductId(+this.activeRoute.snapshot.paramMap.get('id')).subscribe(body => {
      this.product=body;
      this.bcservice.set('@product',this.product.name);
    },error => console.log(error));
  }
  increment(){
    this.quantity++;
  }
  decrement(){
    if(this.quantity===0) this.quantity=0;
    else this.quantity--;
  }
  addToCart(){
    this.basketService.addItemtoBasket(this.product,this.quantity);
  }
}
