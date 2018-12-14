import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-points',
  templateUrl: './my-points.component.html',
  styleUrls: ['./my-points.component.css']
})
export class MyPointsComponent implements OnInit {
  Integralorder: Object;
  integral: String;
  account: String;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.account = sessionStorage.getItem('userphone');
    this.http.post('/api/findUser', {'phone': this.account
    }).subscribe((data) => {
      this.integral = data[0].integration;
    });
    this.http.post('api/getintegration', {username: sessionStorage.getItem('userphone')}).subscribe((data) => {
        if (data) {
          console.log(data);
          this.Integralorder = data;
        }
    });
  }

}
