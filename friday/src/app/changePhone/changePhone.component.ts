import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-change-phone',
  templateUrl: './changePhone.component.html',
  styleUrls: ['./changePhone.component.css']
})
export class ChangePhoneComponent implements OnInit {
  phone:String;
  oldPhone:String;
  newPhone:String;
  isDo=1;
  password:String;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.phone = sessionStorage.getItem("userphone");
  }

  submit(){
    if(this.isDo == 1){
      this.http.post("/api/login",{phoneNum:this.phone,password:this.password}).subscribe((data)=>{
        if(data){
          this.isDo++;
          this.password = "";
          this.oldPhone = this.phone;
        }else{
          alert("密码错误");
        }
      });
    }else{
      this.newPhone = this.phone;
      console.log(this.oldPhone,this.newPhone);
      this.http.post("/api/changephone",{oldPhone:this.oldPhone,newPhone:this.newPhone}).subscribe((data)=>{
        this.isDo++;
      });
    }
  }

}
