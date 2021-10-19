import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IOrder } from '../shared/models/Order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: IOrder[];

  constructor(private orderService: OrderService,) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((response:IOrder[]) => {
      this.orders = response;
    }, error => console.log(error));
  }
 
}
