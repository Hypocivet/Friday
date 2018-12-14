import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr:Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post('/api/getcommodity',{}).subscribe((data)=>{
      this.arr = data;
      console.log(data);
    });
  }

}
