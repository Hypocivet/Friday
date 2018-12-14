import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GiveService} from "../services/give.service";

// @ts-ignore
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username="";
  display:boolean;
  position:string;
  count = 0;

  @Input() loginUser:string;

  constructor(private http:HttpClient,private give:GiveService) { }

  ngOnInit() {
    this.position = "山西省太原市";
    this.display = true;
    this.give.eventEmit.subscribe((value)=>{
      this.username = value;
    });
    this.username = sessionStorage.getItem("userphone");
    if(this.username == null)
      this.username = "请登陆";
  }

  exit(){
    sessionStorage.removeItem("userphone");
  }

  getCity(){
    this.display = false;
  }

  getRecommend(e){
    this.position = e;
  }
}
