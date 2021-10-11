import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, switchMap } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private accountService: AccountService,private router: Router) { }
 

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.registerForm = this.fb.group({
      email: [null,[Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],this.validateEmailExist.bind(this)],
      userName: [null,[Validators.required,Validators.pattern(/^[a-z]{6,32}$/i)]],
      password:  [null,Validators.required]
    });
  }

  onSubmit(){
    this.accountService.register(this.registerForm.value).subscribe(()=>this.router.navigateByUrl('/'),error => console.log(error));
    
  }

  validateEmailExist(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return timer(300).pipe(
      switchMap(() =>
        this.accountService.checkEmailExist(control.value).pipe(
          map((response:Boolean) => {
            console.log("call API");
            if (!response) {
              return null;
            }
            return {
              emailExist: true
            };
          })
        )
      )
    );
  }

}
