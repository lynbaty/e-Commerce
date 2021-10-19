import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total/order-total.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketTotalComponent } from './components/basket-total/basket-total.component';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    OrderTotalComponent,
    TextInputComponent,
    StepperComponent,
    BasketTotalComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    CdkStepperModule,
    RouterModule
 
  ],
  exports: [PaginationModule,CarouselModule,OrderTotalComponent,ReactiveFormsModule,BsDropdownModule,TextInputComponent,
    BasketTotalComponent,StepperComponent,CdkStepperModule]
})
export class SharedModule { }
