import { Injectable } from '@angular/core';
import { TestDataInterface } from '../models/common.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getContent(): Observable<TestDataInterface[]> {
    const userData = localStorage.getItem('userData');
    const respData = JSON.parse(userData);
    return of(respData);
  }
}
