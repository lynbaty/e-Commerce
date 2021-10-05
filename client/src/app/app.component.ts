import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/models/product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title: string = "Danatea";
  public products: IProduct[];
  ngOnInit(): void {
   
  }

  constructor() {

  }
  
}
