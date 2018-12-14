import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-rate',
  templateUrl: './order-rate.component.html',
  styleUrls: ['./order-rate.component.css']
})
export class OrderRateComponent implements OnInit {
  constructor(private app: AppComponent, private http: HttpClient, private router: Router) { }
  order = [];
  orderNum = 0;
  pros = [];
  pro = [];
  index = '';
  orderRemark = [];
  ngOnInit() {
    this.order.push(this.app.order);
    console.log(this.order[0].orderId);
    this.orderNum = this.order[0].orderId;
    this.index = this.app.index;
    this.pros = this.app.pro;
    this.pro = this.pros;
  }
  doclick() {
    console.log(this.orderRemark);
      this.http.post('/api/orderremark', {orderId: this.orderNum, orderRemark: this.orderRemark}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center']);
      }});
    }
}
