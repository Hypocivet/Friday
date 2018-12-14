import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  srcAll = [];
  srcPage = [];
  flag = false;
  flagb = true;
  selectName = '全部';
  Order = [];
  cateOrder = [];
  // 相同订单中商品数组
  productDate = [];
  // 存放数据源,以保证数据不被修改
  productDates = [];
  // 前台展示数据源
  product = [];
  // 过滤后数据源
  products = [];

  selectPage = 1;
  // 分页按钮的数组
  pages = [];
  // 每页显示商品的数组
  pagePros = [];
  pageA = [];
  pageProsm = [];
  // 用于存储一个单下的所有商品
  soleOrder = [];
  pageAm = [];
  date: Date;
  constructor(private http: HttpClient, private router: Router, private app: AppComponent) { }

  ngOnInit() {
    this.http.post('api/orderform', {username: sessionStorage.getItem('userphone')}).subscribe((data) => {
      if (data.toString().length !== 0) {
        this.flag = true;
        this.flagb = false;
        for (let i = 0; i < ((data.toString().length - 15) / 16 + 1); i++) {
          if (i === 0) {
            this.cateOrder.push(data[i]);
            this.Order.push(data[i]);
            this.soleOrder.push({
              commodityImg: data[i].commodityId.commodityImg,
              orderState: data[i].orderState,
              commodityName: data[i].commodityId.commodityName,
              commodityPrice: data[i].commodityId.commodityPrice,
              count: data[i].count,
              size: data[i].size
            });
          } else {
            if (data[i].orderId === data[i - 1].orderId) {
              if (i === ((data.toString().length - 15) / 16 + 1)) {
                this.soleOrder.push({
                  commodityImg: data[i].commodityId.commodityImg,
                  orderState: data[i].orderState,
                  commodityName: data[i].commodityId.commodityName,
                  commodityPrice: data[i].commodityId.commodityPrice,
                  count: data[i].count,
                  size: data[i].size
                });
                this.productDate.push(this.soleOrder);
              } else {
                this.soleOrder.push({
                  commodityImg: data[i].commodityId.commodityImg,
                  orderState: data[i].orderState,
                  commodityName: data[i].commodityId.commodityName,
                  commodityPrice: data[i].commodityId.commodityPrice,
                  count: data[i].count,
                  size: data[i].size
                });
              }
            } else {
              this.cateOrder.push(data[i]);
              this.Order.push(data[i]);
              this.productDate.push(this.soleOrder);
              this.soleOrder = [];
              this.soleOrder.push({
                commodityImg: data[i].commodityId.commodityImg,
                orderState: data[i].orderState,
                commodityName: data[i].commodityId.commodityName,
                commodityPrice: data[i].commodityId.commodityPrice,
                count: data[i].count,
                size: data[i].size
              });
            }
          }
        }
        this.productDate.push(this.soleOrder);
        this.product = this.productDate;
        this.productDates = this.productDate;
        this.pagePros = this.Order;
        this.getPageCount();
        this.showProsPage(1);
      } else {
        this.flag = false;
        this.flagb = true;
      }
    });
  }
  // 计算价格
  getPrice(a) {
    if (this.pageA[a].length === 1) {
      return Number(this.pageA[a][0].count) * Number(this.pageA[a][0].commodityPrice) + 8;
    } else {
      let price = 0;
      for (let i = 0; i < this.pageA[a].length; i++) {
        price += Number(this.pageA[a][i].count) * Number(this.pageA[a][i].commodityPrice);
      }
      return price + 8;
    }
  }
  // 点击按钮,改变数据源
  getProByCategory(name) {
    this.selectName = name;
    this.pagePros = this.Order;
    this.productDate = this.productDates;
    this.pageA = [];
    console.log(this.selectName);
    if (this.selectName === '全部') {
      this.pagePros = this.Order;
      this.pageProsm = this.Order;
      this.pageA = this.productDates;
      this.pageAm = this.productDates;
      console.log(1);
    } else {
      for (let i = 0; i < this.productDate.length; i++) {
        if (this.productDate[i].length === 1 && this.productDate[i][0].orderState === name) {
          this.products = [];
          this.products.push(this.productDate[i]);
        } else if (this.productDate[i][0].orderState === name) {
          this.products = [];
          this.products.push(this.productDate[i]);
        }
      }
      this.pageA = this.products;
      this.pageAm = this.products;
      this.pagePros = this.pagePros.filter((value) => {
        return value.orderState === name;
      });
      this.pageProsm = this.pagePros;
    }
    this.getPageCount();
    this.showpage(1);
  }
  // 判断订单状态,显示按钮
  getTrue(a, b, c) {
    if (a.orderState === b || a.orderState === c) {
      return true;
    }
  }
  // 删除订单
  delete(a) {
    this.http.post('api/deleteorder', {orderId: a}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center']);
      }
    });
  }
  // 支付
  toPay(a, i) {
    const arr = [];
    arr.push(this.getPrice(i));
    arr.push(this.pagePros[i].userSite.name
      + this.pagePros[i].userSite.area + this.pagePros[i].userSite.detail + this.pagePros[i].userSite.phone);
    arr.push(this.pagePros[i].orderId);
    this.router.navigate(['/oresult', arr]);
  }
  // 取消订单
  cancel(a) {
    this.date = new Date();
    this.http.post('/api/canceltime', {orderId: a, orderState: '关闭'}).subscribe((data) => {
      if (data) {
        this.http.post('', {orderId: a, cancelTime: this.date.toString()}).subscribe(() => {
          this.router.navigate(['/center']);
        });
      }
    });
  }
  // 申请退款
  apply(a) {
    this.date = new Date();
    this.http.post('/api/updateorder', {orderId: a, orderState: '申请退款'}).subscribe((data) => {
      if (data) {
        this.http.post('/api/aplyrefundtime', {orderId: a, aplyRefundTime: this.date.toString()}).subscribe(() => {
          if (data) {
            this.router.navigate(['/center']);
          }
        });
      }
    });
  }
  // 确认收货
  confirm(a) {
    this.date = new Date();
    this.http.post('/api/updateorder', {orderId: a, orderState: '待评价'}).subscribe((data) => {
      if (data) {
        this.http.post('/api/gettime', {orderId: a, getTime: this.date.toString()}).subscribe(() => {
          if (data) {
            this.router.navigate(['/center']);
          }
        });
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
    this.router.navigate(['/center/orderrate']);
  }
  // 申请平台接入
  intervenion(a) {
    this.http.post('/api/updateorder', {orderId: a, orderState: '申请平台介入'}).subscribe((data) => {
      if (data) {
        this.router.navigate(['/center/myorder']);
      }
    });
  }
  // 分页算法
  getPageCount() {
    // 我们规定一页显示3件商品
    const count = Math.ceil(this.pagePros.length / 3);
    const arr = [];
    for (let i = 1; i < count + 1; i++) {
      arr.push(i);
    }
    this.pages = arr;
  }

  showProsPage(x) {
    this.selectPage = x;
    this.pagePros = this.cateOrder.slice((x - 1) * 3, x * 3);
    this.pageA = this.product.slice((x - 1) * 3, x * 3);
  }
  showpage(x) {
    this.selectPage = x;
    this.pagePros = this.pageProsm.slice((x - 1) * 3, x * 3);
    this.pageA = this.pageAm.slice((x - 1) * 3, x * 3);
    console.log(this.pagePros);
    console.log(this.pageA);
  }
  //
  details(a, b, c) {
    this.app.addOrder(a, b, c);
  }
  doClick() {
    this.router.navigate(['/首页']);
  }
}
