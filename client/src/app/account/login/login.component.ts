import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  constructor(private fb: FormBuilder, private accountService: AccountService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],
      password: ['',Validators.required],
      remember:  ['',Validators.required]
    });
  }

  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe(()=>this.router.navigateByUrl(this.returnUrl),error => console.log(error));
    
  }

}
