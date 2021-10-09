import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { IProduct } from './shared/models/product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title: string = "Danatea";
  public products: IProduct[];
  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    if(basketId) {
      this.basketService.getBasket(basketId).subscribe(() => 
      console.log("intitital setup"));
    }
   
  }

  constructor(private basketService: BasketService) {

  }
  
}
