import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
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
   this.loadBasket();
   this.loadUser();
   
  }

  loadBasket(){
    const basketId = localStorage.getItem('basket_id');
    if(basketId) {
      this.basketService.getBasket(basketId).subscribe(() => 
      console.log("intitital setup"));
    }
  }
  loadUser(){
    const token = localStorage.getItem('Token');
    if(token){
      this.accountService.loadCurrentUser(token).subscribe(() => console.log("User login"), error => console.log(error));
    }
  }
  constructor(private basketService: BasketService, private accountService: AccountService) {

  }
  
}
