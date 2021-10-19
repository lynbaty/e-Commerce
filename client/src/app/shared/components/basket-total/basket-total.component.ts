import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { EventEmitter } from '@angular/core';
import { IBasket, IBasketItem } from '../../models/IBasket';

@Component({
  selector: 'app-basket-total',
  templateUrl: './basket-total.component.html',
  styleUrls: ['./basket-total.component.scss']
})
export class BasketTotalComponent implements OnInit {
  @Output() decre: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>()
  @Output() incre: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>()
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>()

  @Input() isBasket = true;
  basket$: Observable<IBasket>;
  constructor(private basketService: BasketService) { }
  
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrement(item: IBasketItem){
    this.decre.emit(item);
  }
  increment(item: IBasketItem){
    this.incre.emit(item);
  }
  delete(item: IBasketItem){
    this.remove.emit(item);
  }

}
