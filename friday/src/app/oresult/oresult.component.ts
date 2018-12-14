import { Component, OnInit } from '@angular/core';
import {OrderService} from "../services/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-oresult',
  templateUrl: './oresult.component.html',
  styleUrls: ['./oresult.component.css']
})
export class OresultComponent implements OnInit {
  userSite="userSite";
  orderId="orderId";
  price=10;
  flag = true;

  constructor(private order:OrderService,private porInfo:ActivatedRoute,private http:HttpClient,private router:Router) {
    console.log("2");
  }

  ngOnInit() {
    this.porInfo.params.subscribe((results)=>{
      this.price = results[0];
      this.userSite = results[1];
      this.orderId = results[2];
    });
  }

  flags(){
    this.flag = !this.flag;
  }

  finish(){
    this.http.post("/api/updateorder",{orderId:this.orderId,orderState:"待发货"}).subscribe((resluts)=>{
      if(resluts){
        alert("支付成功！");
        this.router.navigate(['/center/myorder']);
      }else{
        alert("支付失败，重新支付！");
      }
    });
  }
}
