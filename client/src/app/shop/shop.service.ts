import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/type';
import { map } from 'rxjs/operators'
import { ProductParams } from '../shared/models/productParams';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }
  public baseUrl = "https://localhost:5001/api/";
 

  public getProducts(productParams: ProductParams){
    let params = new HttpParams();
    if(productParams.brandId !== 0)
    {
      params = params.append('brandId',productParams.brandId.toString());
    } 
    if(productParams.typeId !==0) 
    {
      params = params.append('typeId',productParams.typeId.toString());
    }
    if(productParams.search)
    {
      params = params.append('search',productParams.search);
    }
    params = params.append('sort',productParams.sort);
    params = params.append('pageIndex',productParams.pageIndex);
    params = params.append('pageSize',productParams.pageSize);

    // if(productParams.search) 
    // {
    //   params = params.append('search',productParams.search);
    // }
    return this.http.get<IPagination>(this.baseUrl+'products',{observe:"body",params: params});
   
  }
  public getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  public getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
  public getProductId(id: number){
    return this.http.get<IProduct>(this.baseUrl+"products/"+id);
  }
}
