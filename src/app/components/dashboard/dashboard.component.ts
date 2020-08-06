import { Component, OnInit, ApplicationRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FilterInterface, Users } from 'src/app/models/common.model';
import { UserService } from 'src/app/services/user.service';
import { combineLatest, Observable } from 'rxjs';
import { CommonConstants } from 'src/app/constants/common-constants';
import { select } from '@angular-redux/store';
import { UsersActions } from 'src/app/actions/users.actions';
import { FilterActions } from 'src/app/actions/filter.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData: Array<Users>;
  companyFilter: Array<FilterInterface>;
  companyFilterUpdate: Array<FilterInterface>;

  @select('users') public users$: Observable<Users>;
  @select('filters') public filters$: Observable<FilterInterface[]>;

  constants = CommonConstants;

  constructor(private commonService: CommonService,
    private userService: UserService,
    public userActions: UsersActions,
    private filterActions: FilterActions) {

  }

  ngOnInit() {
    this.handleData();
    this.users$.subscribe((users: Users) => {
      if (users) this.companyFilter = this.getCompanyFlter(users);

    });
    this.filters$.subscribe((resp: FilterInterface[]) => {
      if (!resp || resp.filter) return;
      this.companyFilterUpdate = [...resp];
    });
  }

  getCompanyFlter(users: Users) {
    // return 
    const companyFilter: Array<FilterInterface> = users.list.map(user => {
      return {
        id: user.id,
        name: user.company,
        isSelected: false,
      }
    })
    return companyFilter;
  }


  handleData() {
    if (!this.commonService.isDataAvailable()) {
      this.commonService.setData();
      this.userActions.getUsers();
      this.filterActions.getFilters();
    } else {
      this.userActions.getUsers();
    }
  }

  companyFilters(item: FilterInterface[]) {
    this.filterActions.updateFilters(item);
  }
}
