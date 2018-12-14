import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-showmore',
  templateUrl: './showmore.component.html',
  styleUrls: ['./showmore.component.css']
})
export class ShowmoreComponent implements OnInit {
  flag1=false;
  flag2=false;
  flag3=false;
  flag4=false;
  flag5=false;
  show1=true;
  change1=true;
  change2=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  choose(p){
    if(p==1){
      this.flag1=true;
      this.flag2=false;
      this.flag3=false;
    }if(p==2){
      this.flag1=false;
      this.flag2=true;
      this.flag3=false;
    }if(p==3){
      this.flag1=false;
      this.flag2=false;
      this.flag3=true;
    }if(p==4){
      this.flag4=true;
      this.flag5=false;

    }if(p==5){
      this.flag4=false;
      this.flag5=true;
    }


  }
  show(p){

    if(p==1){
      this.show1=true;
      this.change1=true;
      this.change2=false;
    }if(p==2){
      this.show1=false;
      this.change1=false;
      this.change2=true;

    }
    console.log(111111);
  }
  buy(){
    this.router.navigate(['/sureorder']);
  }
}
