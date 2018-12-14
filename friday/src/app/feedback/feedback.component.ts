import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/center']);
  }
  submit() {
    this.http.post('', {}).subscribe(() => {});
  }
}
