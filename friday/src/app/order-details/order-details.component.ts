import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order = [];
  pros = [];
  pro = [];
  index = '';
  price = 0;
  a = false;
  b = false;
  c = false;
  d = false;
  e = false;
  f = false;
  g = false;
  h = false;
  i = false;
  date: Date;
  constructor(private app: AppComponent, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.order.push(this.app.order);
    console.log(this.order);
    this.index = this.app.index;
    this.pros = this.app.pro;
    this.pro = this.pros[0][this.index];
    this.getTrue(this.order);
    this.getPrice(this.pro);
  }
  getTrue(a) {
    if (a[0].orderState === '待兑换') {
      this.b = true;
      this.c = true;
    } else if (a[0].orderState === '关闭') {
      this.a = true;
    } else if (a[0].orderState === '待发货') {
      this.d = true;
    } else if (a[0].orderState === '待收货') {
      this.e = true;
      this.f = true;
    } else if (a[0].orderState === '待评价') {
      this.h = true;
    } else if (a[0].orderState === '退款' || a[0].orderState === '售后') {
    } else if (a[0].orderState === '已收货') {
      this.d = true;
      this.g = true;
      this.h = true;
    }

  }
  getPrice(a) {
    for (let j = 0; j < a.length; j++) {
      this.price += Number(a[j].count) * Number(a[j].commodityPrice);
    }
    return this.price + 8;
  }
  // 删除订单
  delete(a) {
    this.http.post('/api/deleteorder', {orderId: a}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center']);
      }
    });
  }
  // 支付
  toPay(a) {
    this.router.navigate(['']);
  }
  // 取消订单
  cancel(a) {
    this.date = new Date();
    this.http.post('/api/updateorder', {orderId: a, orderState: '关闭', cancelTime: this.date}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center']);
      }
    });
  }
  // 申请退款
  apply(a) {
    this.date = new Date();
    this.http.post('/api/updateorder', {orderId: a, orderState: '申请退款', aplyRefundTime: this.date}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center']);
      }
    });
  }
  // 确认收货
  confirm(a) {
    this.date = new Date();
    this.http.post('/api/updateorder', {orderId: a, orderState: '确认收货', getTime: this.date}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center']);
      }
    });
  }
  // 查看物流
  read(a) {}
  // 交易完成
  finish(a) {
    this.http.post('/api/updateorder', {orderId: a, orderState: '交易完成'}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center/lineItem']);
      }
    });
  }
  // 评价
  evaluate(a, b, c) {
    this.app.addOrder(a, b, c);
    this.router.navigate(['/center/orderRate']);
  }
  // 申请平台接入
  intervenion(a) {
    this.http.post('/api/updateorder', {orderId: a, orderState: '申请平台介入'}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center']);
      }
    });
  }
  details(a, b, c) {
    this.app.addOrder(a, b, c);
  }
}

