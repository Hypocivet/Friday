import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public eventEmit :any;

  constructor() {
    this.eventEmit = new EventEmitter();
  }
}
