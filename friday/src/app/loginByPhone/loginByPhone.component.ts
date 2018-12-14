import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-loginByPhone',
  templateUrl: './loginByPhone.component.html',
  styleUrls: ['./loginByPhone.component.css']
})
export class LoginByPhoneComponent implements OnInit {
  username = '';
  flag = true;
  flagp = false;
  flagImg = false;
  str1 = '手机号码不正确,请重新输入';
  src = 'http://192.168.47.47:1015/body/relo/checkBox.png';
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
  }
  login(e) {
    this.http.post('/api/loginByIphone', {username: this.username}).subscribe((data) => {
      console.log(data);
    });
  }
  changeSrc(e) {
    if (this.flag) {
      this.src = 'http://192.168.47.47:1015/body/relo/oncheck.png';
    } else {
      this.src = 'http://192.168.47.47:1015/body/relo/checkBox.png';
    }
    this.flag = !this.flag;
  }
  istrue() {
    if ((/^1[34578]\d{9}$/.test(this.username))) {
      this.flagImg = true;
      this.flagp = false;
    } if (this.username.length !== 11) {
      this.flagImg = false;
      this.flagp = true;
    }
  }

  toRegister(){
    this.router.navigate(["/relo/register"]);
  }
}
