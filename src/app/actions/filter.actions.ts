import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
// import { User } from '../model/users';
// import { Http } from '@angular/http';
import { UserService } from '../services/user.service';
import { FilterInterface } from '../models/common.model';

@Injectable()
export class FilterActions {
    static FILTERS_GET = 'FILTERS_GET';
    static FILTERS_UPDATE = 'FILTERS_UPDATE';
    static FILTERS_ADD = 'FILTERS_ADD';
    static FILTERS_DELETE = 'FILTERS_DELETE';

    constructor(
        private ngRedux: NgRedux<IAppState>,
        // private http: Http,
        private userService: UserService
    ) {
    }

    getFilters() {
        this.ngRedux.dispatch({
            type: FilterActions.FILTERS_GET
        });
    }

    updateFilters(filters: FilterInterface[]) {
        this.ngRedux.dispatch({
          type: FilterActions.FILTERS_UPDATE,
          payload: {
            filters
          }
        });
      }

    addFilter(filter: FilterInterface): void {
        this.ngRedux.dispatch({
            type: FilterActions.FILTERS_ADD,
            payload: { filter }
        });
    }

    deleteFilter(id): void {
        this.ngRedux.dispatch({
            type: FilterActions.FILTERS_DELETE,
            payload: { id }
        });
    }
}
