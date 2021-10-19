import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/shared/models/Order';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: IOrder;
  constructor(private router: Router,private bcService: BreadcrumbService) { 
    this.bcService.set('@details','');
    const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;
    if(state){
      this.order = state as IOrder;
      console.log(this.order);
  }
  }

  ngOnInit(): void {
    this.bcService.set('@details',`Order #${this.order.id} - ${this.order.status}`);
  }

}
