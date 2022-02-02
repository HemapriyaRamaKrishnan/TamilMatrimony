import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private userData = new BehaviorSubject({});
  data = this.userData.asObservable();
  constructor() { }
  addList(data: any) {
    this.userData.next(data);
  }
}
