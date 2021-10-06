import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.scss']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = environment.apiUrl;
  validatorError: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  get400Error()
  {
    this.http.get(this.baseUrl+"products/42").subscribe(response => console.log(response),error => {
      console.log(error);
      this.validatorError = error.errors;
    });
  }
  get500Error()
  {
    this.http.get(this.baseUrl+"buggy/servererror").subscribe(response => console.log(response),error => console.log(error));
  }
  get404Error()
  {
    this.http.get(this.baseUrl+"buggy/notfound").subscribe(response => console.log(response),error => console.log(error));
  }
  get400ValiError()
  {
    this.http.get(this.baseUrl+"products/fourty").subscribe(response => console.log(response),error => console.log(error));
  }

}
