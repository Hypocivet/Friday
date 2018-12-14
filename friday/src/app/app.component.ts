import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  order = [];
  pro = [];
  index = '';
  addOrder(p, q, o) {
    this.order = [];
    this.pro = [];
    this.index = '';
    this.order = p;
    this.pro.push(q);
    console.log(this.pro)
    this.index = o;
  }
}
