import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  userPosition="山西省太原市";
  cityObj:any;
  array=[];
  cityCode=[];
  provinceArr=[];
  cityArr=[];
  countyArr = [];
  nowProvince:string;
  nowCity:string;
  nowCounty:string;

  @Input() display:boolean;
  @Output() recommend = new EventEmitter()

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.display = true;
    this.http.post("/api/city",{}).subscribe((data)=>{
      this.cityObj = data;
      this.array = this.cityObj["100000"];
      for(let i in this.array){
        this.cityCode.push(i);
        this.cityCode.push(this.array[i]);
        this.provinceArr.push(this.cityCode);
        this.cityCode = [];
      }
    });
  }

  province(e){
    this.cityArr = [];
    this.countyArr = [];
    this.nowProvince = this.provinceArr[e.target.selectedIndex-1][1];
    this.array = this.cityObj[e.target.value];
    for(let i in this.array){
      this.cityCode.push(i);
      this.cityCode.push(this.array[i]);
      this.cityArr.push(this.cityCode);
      this.cityCode = [];
    }
  }

  city(e){
    this.countyArr = [];
    this.nowCity = this.cityArr[e.target.selectedIndex-1][1];
    this.array = this.cityObj[e.target.value];
    for(let i in this.array){
      this.cityCode.push(i);
      this.cityCode.push(this.array[i]);
      this.countyArr.push(this.cityCode);
      this.cityCode = [];
    }
  }

  county(e){
    this.nowCounty = this.countyArr[e.target.selectedIndex-1][1];
  }

  postCity(){
    this.recommend.emit(this.nowProvince + this.nowCity + this.nowCounty);
    this.display = true;
  }
}
