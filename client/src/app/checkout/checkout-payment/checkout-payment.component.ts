import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IOrder, IOrderToCreate } from 'src/app/shared/models/Order';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private basketService: BasketService, private checkoutService: CheckoutService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmitOrder(){
    const orderToCreate: IOrderToCreate = {
      deliveryMethodId: this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shiptoAddress: this.checkoutForm.get('addressForm').value,
      basketId: this.basketService.getCurrentBasketValue().id
    }
    console.log(orderToCreate);
    this.checkoutService.createOrder(orderToCreate).subscribe((order: IOrder) => {
      this.basketService.deleteBasketLocal(orderToCreate.basketId);
      const navigationExtras : NavigationExtras = {state: order};
      this.router.navigate(['checkout/success'],navigationExtras);
      this.toastr.success("submitted Order");}
      , error => console.log(error));
    
  }
}
