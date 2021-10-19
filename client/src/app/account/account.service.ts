import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAddress } from '../shared/models/account/Address';
import { IUser } from '../shared/models/account/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private userSource = new BehaviorSubject<IUser>(null);
  user$ = this.userSource.asObservable();

  constructor(private http: HttpClient,private router: Router) { }

  login(values: any){
    return this.http.post(this.baseUrl+'account/login',values).pipe(
      map((user: IUser) =>
      {
        if(user){
          this.userSource.next(user);
          localStorage.setItem('Token',user.token);
        }
      })
    );
  }
  getCurrentUser(){
    return this.userSource.value;
  }
  loadCurrentUser(token: string){
    let headers = new HttpHeaders();
    headers = headers.set("Authorization",`Bearer ${token}`);

    return this.http.get(this.baseUrl+'account',{headers}).pipe(
      map((user: IUser)=>
      {
        if(user){
        this.userSource.next(user);
        localStorage.setItem('Token',user.token);
      }
      })
    );
  }
  register(values: any){
    return this.http.post(this.baseUrl+'account/register',values).pipe(
      map((user:IUser) => {
        if(user) localStorage.setItem('Token',user.token);
        this.userSource.next(user);
      })
    );
  }
  logout(){
    localStorage.removeItem('Token');
    this.userSource.next(null);
    this.router.navigateByUrl('/');
  }
  checkEmailExist(email: string){
    return this.http.get(this.baseUrl+'account/emailexist?email='+email);
  }

  getAddressUser(){
    return this.http.get<IAddress>(this.baseUrl+'account/address');
  }

  updateAddressUser(address: IAddress){
    return this.http.put<IAddress>(this.baseUrl+'account/address',address);
  }





}
