import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pic=true;
  phone:string;
  password:string;
  rePassword:string;
  phoneIsTrue=true;
  passwordIsTrue=true;
  similarPassword=true;

  constructor(private http :HttpClient,private router:Router) { }

  ngOnInit() {
    this.phone = sessionStorage.getItem("userphone");
    console.log(this.phone);
  }

  sure(e){
    if(this.pic)
      e.path[0].src = "http://192.168.47.47:1015/body/relo/onClick.png";
    else
      e.path[0].src = "http://192.168.47.47:1015/body/relo/toClick.png";
    this.pic = !this.pic;
  }

  isphone(){
    console.log(this.phoneIsTrue);
    if(!(/^1[34578]\d{9}$/.test(this.phone))){
      // @ts-ignore
      this.phoneIsTrue = false;
    }else{
      this.phoneIsTrue = true;
    }
  }

  ispassword(){
    if(!(/^[0-9]{6,20}$/.test(this.password))){
      // @ts-ignore
      this.passwordIsTrue = false;
    }
    else{
      this.passwordIsTrue = true;
    }
  }

  repassword(){
    if(!(this.password === this.rePassword)){
      // @ts-ignore
      this.similarPassword = false;
    }else{
      this.similarPassword = true;
    }
  }

  toLogin(){
    this.router.navigate(["/relo/login"]);
  }

  register(){
    if(this.phone!=null && this.password && this.rePassword && this.phoneIsTrue && this.similarPassword && this.passwordIsTrue){
      this.http.post('/api/register', {phoneNum: this.phone, password: this.password}).subscribe((data) => {
        if(data) {
          alert("恭喜您注册成功，点击确定跳转至登录页面。");
          this.toLogin();
        }
      });
    }
  }
}
