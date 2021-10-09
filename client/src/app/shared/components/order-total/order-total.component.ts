import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { ITotalBasket } from '../../models/IBasket';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss']
})
export class OrderTotalComponent implements OnInit {
  total$: Observable<ITotalBasket>;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.total$ = this.basketService.total$;
  }

}
