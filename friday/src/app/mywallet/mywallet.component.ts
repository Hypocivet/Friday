import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.component.html',
  styleUrls: ['./mywallet.component.css']
})
export class MywalletComponent implements OnInit {
  pro: Object;
  account: String;
  wallet: String;
  flag1 = false;
  flag2 = false;
  flag3 = false;
  amount = 0;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.account = sessionStorage.getItem('userphone');
    this.http.post('/api/findUser', {'phone': this.account}).subscribe((data) => {
      console.log(data);
      this.wallet = data[0].balance;
    });
  }
  choose(p) {
    if (p === 1) {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.amount = 500;
    } else if (p === 2) {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.amount = 1000;
    } else {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.amount = 2000;
    }
  }
  topUp() {
    if (this.amount === 0) {
      alert('请选择充值金额');
    } else {
      var userId = sessionStorage.getItem("userphone");
      this.http.post('/api/topup', {userId:userId,balance:this.amount}).subscribe((data) => {
        if (data) {
          alert('充值成功')
          this.router.navigate(['/center/myaccount']);
        } else {
          alert('由于其他原因,充值失败');
        }
      });
    }
  }
}
