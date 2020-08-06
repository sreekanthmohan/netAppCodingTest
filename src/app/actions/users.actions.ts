import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
// import { User } from '../model/users';
// import { Http } from '@angular/http';
import { UserService } from '../services/user.service';
import { User, FilterInterface } from '../models/common.model';

@Injectable()
export class UsersActions {
  static USERS_GET = 'USERS_GET';
  static USERS_UPDATE = 'USERS_UPDATE';
  static FILTER_APPLY = 'FILTER_APPLY';
  static FILTERS_GET = 'FILTERS_GET';
  static FILTERS_UPDATE = 'FILTERS_UPDATE';

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

  getFilters() {
    this.ngRedux.dispatch({
      type: UsersActions.FILTERS_GET
    });
  }

  updateFilters(filters: FilterInterface[]) {
    this.ngRedux.dispatch({
      type: UsersActions.FILTERS_UPDATE,
      payload: {
        filters
      }
    });
  }

  applyFilter(status: boolean) {
    this.ngRedux.dispatch({
      type: UsersActions.FILTER_APPLY,
      payload: {
        applyFilter: status
      }
    });
  }

}
