import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';



const routes: Routes = [
  {path: '', component: OrderComponent},
  {path: 'details', component: OrderDetailsComponent,data: {breadcrumb: {alias: 'details'}}}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
