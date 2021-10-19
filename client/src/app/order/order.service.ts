import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrders(){
    let baseUrl = environment.apiUrl;
    return this.http.get<IOrder[]>(baseUrl+ 'order');
  }
  getOrderById(id: number){
    let baseUrl = environment.apiUrl;
    return this.http.get<IOrder>(baseUrl+ 'order/'+id);
  }
}
