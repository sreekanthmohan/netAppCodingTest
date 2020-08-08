import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonConstants } from '../constants/common-constants';
import { User, DropdownInterface } from '../users/users.model';

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

  getFilters(): Observable<DropdownInterface[]> {
    const filters = localStorage.getItem(CommonConstants.filters);
    const respData = JSON.parse(filters);
    return of(respData);
  }
  
}
