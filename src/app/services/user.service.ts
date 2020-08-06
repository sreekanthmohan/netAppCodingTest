import { Injectable } from '@angular/core';
import { User, FilterInterface } from '../models/common.model';
import { Observable, of } from 'rxjs';
import { CommonConstants } from '../constants/common-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getContent(): Observable<User[]> {
    const userData = localStorage.getItem(CommonConstants.userdata);
    const respData = JSON.parse(userData);
    return of(respData);
  }

  getFilters(): Observable<FilterInterface[]> {
    const filters = localStorage.getItem(CommonConstants.filters);
    const respData = JSON.parse(filters);
    return of(respData);
  }
  
}
