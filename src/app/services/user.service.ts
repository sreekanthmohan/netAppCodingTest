import { Injectable } from '@angular/core';
import { TestDataInterface } from '../models/common.model';
import { Observable, of } from 'rxjs';
import { CommonConstants } from '../constants/common-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getContent(): Observable<TestDataInterface[]> {
    const userData = localStorage.getItem(CommonConstants.userdata);
    const respData = JSON.parse(userData);
    return of(respData);
  }
}
