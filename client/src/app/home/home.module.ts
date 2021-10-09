import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
