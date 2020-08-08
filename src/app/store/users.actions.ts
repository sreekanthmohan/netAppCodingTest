import { Injectable } from '@angular/core';
import { IAppState } from './index';
import { NgRedux } from '@angular-redux/store';
import { UserService } from '../services/user.service';
import { User } from '../users/users.model';

@Injectable()
export class UsersActions {
  static USERS_GET = 'USERS_GET';
  static USERS_UPDATE = 'USERS_UPDATE';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private userService: UserService
  ) {
  }

  getUsers() {
    this.userService.getContent()
      .subscribe((res) => {
        const users = res;
        this.ngRedux.dispatch({
          type: UsersActions.USERS_GET,
          payload: {
            users
          }
        });
      });
  }

  updateUsers(users: User) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_UPDATE,
      payload: {
        users
      }
    });
  }
}
