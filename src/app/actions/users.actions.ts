import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
// import { User } from '../model/users';
// import { Http } from '@angular/http';
import { UserService } from '../services/user.service';
import { User, Users } from '../models/common.model';

@Injectable()
export class UsersActions {
  static USERS_GET = 'USERS_GET';
  static USERS_UPDATE = 'USERS_UPDATE';
  static USERS_ADD = 'USERS_ADD';
  static USERS_DELETE = 'USERS_DELETE';

  // API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    // private http: Http,
    private userService: UserService
  ) {
  }

  getUsers() {
    this.userService.getContent()
      .subscribe((res) => {
        // get users
        const list = res;
        this.ngRedux.dispatch({
          type: UsersActions.USERS_GET,
          payload: {
            list
          }
        });
      });
  }

  updateUsers(users: Users) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_UPDATE,
      payload: {
        users
      }
    });
  }

}
