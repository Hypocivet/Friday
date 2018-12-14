import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  img:any;
  headImg:any;
  nickname="";
  sex="";
  birthday="";
  phone=sessionStorage.getItem("userphone");

  constructor(private http:HttpClient,private sanitizer:DomSanitizer,private router:Router) { }

  ngOnInit() {
    if(this.phone == null){
      alert("用户未登陆");
      this.router.navigate(["/relo/login"]);
    }
    this.http.post("/api/findUser",{
      "phone":this.phone
    }).subscribe((data)=>{
      this.nickname = data[0].phone;
      this.phone = data[0].phone;
      this.birthday = data[0].birthday;
      this.headImg = data[0].headImg;
      this.sex = data[0].sex;
      if(this.headImg == ""){
        this.headImg = "http://192.168.47.47:1015/body/userCenter/headImg.png";
      }
    });
  }

  submit(){
    console.log(this.img);
    this.http.post("/api/update",{
      "headImg":this.img,
      "nickName":this.nickname,
      "sex":this.sex,
      "birthday":this.birthday,
      "phone":this.phone
    }).subscribe((data)=>{
      if(data) {
        alert("个人信息修改成功！");
      }
    });
  }

  showImg(e){
    function uploadFile(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function() {
          resolve(this.result)
        }
      })
    }
    this.img = uploadFile(e.currentTarget.files[0]).then(function(result){
      return result;
    });
    console.log(this.img);
    this.headImg = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e.currentTarget.files[0]));
  }

  toChange(e){
    var next;
    if(e.path[1].innerText === "男")
      next = 2;
    else
      next = 1;
    if(e.path[0].alt == "off" && e.path[2].children[next].childNodes[0].alt == "off") {
      this.sex = e.path[1].innerText;
      e.path[0].alt = "on";
    }else if(e.path[0].alt == "off" && e.path[2].children[next].childNodes[0].alt == "on"){
      this.sex = e.path[1].innerText;
      e.path[0].alt = "on";
      e.path[2].children[next].childNodes[0].alt = "off";
    }
    this.sex = e.path[1].innerText;
  }

}
