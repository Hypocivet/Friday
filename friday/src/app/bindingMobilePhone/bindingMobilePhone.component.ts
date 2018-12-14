import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bindingMobilePhone',
  templateUrl: './bindingMobilePhone.component.html',
  styleUrls: ['./bindingMobilePhone.component.css']
})
export class BindingMobilePhoneComponent implements OnInit {
  showflag = false;
  flagOne = false;
  flagTwo = false;
  flagThree = false;
  phoneNum = '';
  password = '';
  again = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  isNametrue() {
    if ((/^1[34578]\d{9}$/.test(this.phoneNum))) {
      this.flagOne = true;
    } else {
      this.flagOne = false;
    }
  }
  isPwdtrue() {
    if ((/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/.test(this.password))) {
      this.flagTwo = true;
    } else {
      this.flagTwo = false;
    }
  }
  isAgaintrue() {
    if (this.password === this.again) {
      this.flagThree = true;
    } else {
      this.flagThree = false;
    }
  }
  doClcik(e) {
    this.http.post('', {username: this.phoneNum, password: this.password}).subscribe((data) => {
      console.log(data);
    });
  }
}
