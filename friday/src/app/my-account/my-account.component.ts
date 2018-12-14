import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  headImg:String;
  account: String;
  integral = '1220';
  wallet = '2000.00';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.account = sessionStorage.getItem("userphone");
    this.http.post("/api/findUser",{
      "phone":this.account
    }).subscribe((data)=>{
      this.headImg = data[0].headImg;
      this.integral = data[0].integration;
      this.wallet = data[0].balance;
      if(this.headImg == ""){
        this.headImg = "http://192.168.47.47:1015/body/userCenter/headImg.png";
      }
    });
  }

}
