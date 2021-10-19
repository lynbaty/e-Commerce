import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/checkout/deliveryMethod';
import { IOrderToCreate } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  

  constructor(private http: HttpClient) { }

  getDeliveryMethods(){
    let baseUrl = environment.apiUrl;
    return this.http.get(baseUrl + "order/deliverymethods").pipe(
      map((dm: IDeliveryMethod[])=> {
        return dm.sort((a,b) => b.price - a.price);
      })
    );
  }
  createOrder(orderToCreate: IOrderToCreate){
    let baseUrl = environment.apiUrl;
    return this.http.post(baseUrl + "order",orderToCreate);
  }
}
