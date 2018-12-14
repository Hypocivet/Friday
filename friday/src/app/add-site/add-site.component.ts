import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  name="";
  area="";
  phone="";
  phone1="";
  phone2="";
  default = "false";
  detail = "";
  flag = true;
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

  addSite(){
    console.log(this.default);
    if(this.phone = ""){
      this.phone = this.phone1 + this.phone2;
    }
    this.http.post("addsite",{name:this.name,area:this.area,phone:this.phone,default:this.default,detail:this.detail}).subscribe((data)=>{

    });
  }

  chkRadio(e){
    e.path[0].checked = this.flag;
    if(this.flag)
      this.default = "true";
    else
      this.default = "false";
    this.flag = !this.flag;
  }
}
