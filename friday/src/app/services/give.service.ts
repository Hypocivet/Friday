import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiveService {
  public eventEmit :any;

  constructor() {
    this.eventEmit = new EventEmitter();
  }
}
