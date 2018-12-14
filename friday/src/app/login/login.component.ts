import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {GiveService} from "../services/give.service";

// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  flag = true;
  flagp = false;
  flagImg = false;
  str1 = '手机号码不正确,请重新输入';
  src = 'http://192.168.47.47:1015/body/relo/checkBox.png'

  @Output() loginUser = new EventEmitter();

  constructor(private http: HttpClient,private router:Router,public give:GiveService) { }

  ngOnInit() {
  }
  login(e) {
    this.http.post('/api/login', {phoneNum: this.username, password: this.password}).subscribe((data) => {
      if(data){
        sessionStorage.setItem("userphone",this.username);
        this.router.navigate([""]);
        this.give.eventEmit.emit(this.username);
      }
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
