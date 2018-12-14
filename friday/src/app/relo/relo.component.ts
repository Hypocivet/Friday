import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-relo',
  templateUrl: './relo.component.html',
  styleUrls: ['./relo.component.css']
})
export class ReloComponent implements OnInit {

  @Output() loginUser = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  getUser(e){
    console.log("relo:" + e);
    this.loginUser = e;
  }
}
