import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mycar',
  templateUrl: './mycar.component.html',
  styleUrls: ['./mycar.component.css']
})
export class MycarComponent implements OnInit {
  count = [1];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    var username = sessionStorage.getItem("userphone");
    this.http.post("/api/getcar",{userId:username}).subscribe((results)=>{

    });
  }

  jia(e){
    this.count[e.path[1].children[1].placeholder]++;
  }

  jian(e){
    this.count[e.path[1].children[1].placeholder]--;
  }

  changeCount(e){
    this.count[e.path[0].placeholder] = e.target.value;
  }
}
