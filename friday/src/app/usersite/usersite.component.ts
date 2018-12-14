import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-usersite',
  templateUrl: './usersite.component.html',
  styleUrls: ['./usersite.component.css']
})
export class UsersiteComponent implements OnInit {
  isNull:boolean;
  sites:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.post("/api/getsite",{userId:sessionStorage.getItem("userphone")}).subscribe((data)=>{
      this.sites = data;
      if(this.sites!=null)
        this.isNull = true;
      else;
      this.isNull = false;
    });
  }

  deleteUserSite(id){
    this.http.post("/api/deletesite",{id:id}).subscribe((data)=>{
      if(data){
        alert("删除成功！");
      }
    })
  }
}
