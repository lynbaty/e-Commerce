import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/type';
import { ShopService } from './shop.service';
import { PaginationComponent } from 'ngx-bootstrap/pagination';
import { ProductParams } from '../shared/models/productParams';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search',{static:false}) searchTemp: ElementRef;
  public products: IProduct[];
  public brands: IBrand[];
  public types: IType[];
  public productParams = new ProductParams();
  public sortOptions = [
    {name: "Alphabetical", value: "name"},
    {name: "Price: Low to High", value:"price"},
    {name: "Price: High to Low", value:"priceDesc"}
  ]
  public totalCount: number;
  constructor(private shopService: ShopService) { }
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts(){
    this.shopService.getProducts(this.productParams).subscribe( response => {
      this.products = response.data;
      this.productParams.pageIndex = response.pageIndex;
      this.productParams.pageSize = response.pageSize;
      this.totalCount = response.count;
    }, error => console.log(error));
  }
  getBrands(){
    this.shopService.getBrands().subscribe(response => this.brands = [{id: 0,name:"All"},...response],
      error => console.log(error));
  }
  getTypes(){
    this.shopService.getTypes().subscribe(response => this.types = [{id: 0,name:"All"},...response],
      error => console.log(error));
  }
  onBrandSelected(brandId:number){
    this.productParams.brandId = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId:number){
    this.productParams.typeId = typeId;
    this.getProducts();
  }
  onSortSelected(event: any)
  {
    this.productParams.sort = event.target.value;
    this.getProducts();
  }
  onChangePage(event: any){
    this.productParams.pageIndex=event.page;
    this.getProducts();
  }
  onSearchSelected(){
    this.productParams.search = this.searchTemp.nativeElement.value;
    this.getProducts();
  }
  onSearchReset(){
    this.searchTemp.nativeElement.value = '';
    this.productParams = new ProductParams();
    this.getProducts();
  }
  onKeySelected(event: any){
    this.productParams.search = event.value;
    this.getProducts();
  }

}
