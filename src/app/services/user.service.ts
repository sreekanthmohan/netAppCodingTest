import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonConstants } from '../constants/common-constants';
import { User, DropdownInterface } from '../users/users.model';
import { delay, tap } from 'rxjs/operators';

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

  getDataFromId(): Observable<any> {
    const userData = localStorage.getItem(CommonConstants.userdata);
    const respData = JSON.parse(userData);
    return of(respData);
  }

  getApiError(): Observable<any> {
    return of(0).pipe(
      tap(() => { throw CommonConstants.dataFetchError; })
    );
  }
}
