import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  @Input() orders: IOrder[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  details(order){
    this.router.navigate(['order/details'],{state: order});
  }

}
