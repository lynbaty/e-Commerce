import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total/order-total.component'




@NgModule({
  declarations: [
    OrderTotalComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [PaginationModule,CarouselModule,OrderTotalComponent]
})
export class SharedModule { }
