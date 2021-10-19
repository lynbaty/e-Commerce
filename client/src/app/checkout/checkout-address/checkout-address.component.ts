import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';


@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup;


  constructor(private accountService: AccountService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  onClick(){
    var address = this.checkoutForm.get('addressForm').value;
    this.accountService.updateAddressUser(address).subscribe(() => {
      this.toaster.success("Address Saved");
    },error => console.log(error));
  }

}
