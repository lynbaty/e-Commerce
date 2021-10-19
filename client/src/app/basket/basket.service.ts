import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/checkout/deliveryMethod';
import { Basket, IBasket, IBasketItem, ITotalBasket } from '../shared/models/IBasket';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(null);
  basket$ = this.basketSource.asObservable();
  constructor(private http: HttpClient) { }
  private totalSource = new BehaviorSubject<ITotalBasket>(null);
  total$ = this.totalSource.asObservable();
  shipping = 0;

  getBasket(id: string){
    return this.http.get(this.baseUrl + 'basket?id=' + id)
    .pipe(
      map((basket:IBasket) => {
        this.basketSource.next(basket);
        this.getTotalBasket();
      })
    );
  }
  getShipping(method: IDeliveryMethod){
    this.shipping = method.price;
    this.getTotalBasket();
  }
  setBasket(basket: IBasket){
    console.log(basket);
    return this.http.post(this.baseUrl + 'basket',basket).subscribe((response:IBasket) => {
      this.basketSource.next(response);
      this.getTotalBasket();
    }, error => console.log(error));
  }
  incrementQuantity(item: IBasketItem){
    const basket = this.getCurrentBasketValue();
    const itemIndex = basket.items.findIndex(x => x.id === item.id);
    basket.items[itemIndex].quantity ++;
    this.setBasket(basket);
  }
  decrementQuantity(item: IBasketItem){
    const basket = this.getCurrentBasketValue();
    const itemIndex = basket.items.findIndex(x => x.id === item.id);
    basket.items[itemIndex].quantity --;
    if(basket.items[itemIndex].quantity ===0) basket.items.splice(itemIndex,1);
    this.setBasket(basket);
  }
  deleteQuantity(item: IBasketItem){
    const basket = this.getCurrentBasketValue();
    const itemIndex = basket.items.findIndex(x => x.id === item.id);
    basket.items.splice(itemIndex,1);
    this.setBasket(basket);
  }
  deleteBasketLocal(id){
    this.basketSource.next(null);
      this.totalSource.next(null);
      localStorage.removeItem(id);
  }
  deleteBasket(basket: IBasket){
    return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe(()=>{
      this.basketSource.next(null);
      this.totalSource.next(null);
      localStorage.removeItem('basket_id');
      },error=> console.log(error));
  }
  getTotalBasket(){
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;
    const subTotal = basket.items.reduce((a,b)=>(b.price*b.quantity)+a,0);
    const total = shipping + subTotal;
    this.totalSource.next({shipping: shipping, subTotal: subTotal, total: total});
  }
  getCurrentBasketValue(){
    return this.basketSource.value;
  }
  addItemtoBasket(item: IProduct, quantity = 1){
    const itemToAdd: IBasketItem = this.mapProductToBasketItem(item,quantity);
    const basket = this.getCurrentBasketValue() ?? this.creatBasket();
    basket.items = this.addOrCreateItems(itemToAdd,basket.items,quantity);
    this.setBasket(basket);
  }
  addOrCreateItems(itemToAdd: IBasketItem, items: IBasketItem[], quantity: number): IBasketItem[] {
    const index = items.findIndex(x => x.id === itemToAdd.id);
    if(index === -1){
       itemToAdd.quantity = quantity;
      items.push(itemToAdd);
      }
    else{
      items[index].quantity += quantity;
    }
    return items;
  }

  private creatBasket(): IBasket {
   const basket = new Basket();
   localStorage.setItem('basket_id',basket.id);
   return basket;
  }
  private mapProductToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id : item.id,
      productName : item.name,
      price: item.price,
      brand: item.productBrand,
      type: item.productType,
      quantity,
      pictureUrl: item.pictureUrl
    };
  }
}
