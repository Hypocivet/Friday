import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  pic=true;
  phone:string;
  password:string;
  rePassword:string;
  phoneIsTrue=true;
  passwordIsTrue=true;
  similarPassword=true;

  constructor() { }

  ngOnInit() {
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
}
