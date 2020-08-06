import { Component, OnInit, ApplicationRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FilterInterface, User } from 'src/app/models/common.model';
import { UserService } from 'src/app/services/user.service';
import { combineLatest, Observable } from 'rxjs';
import { CommonConstants } from 'src/app/constants/common-constants';
import { select } from '@angular-redux/store';
import { UsersActions } from 'src/app/actions/users.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  companyFilter: Array<FilterInterface>;
  companyFilterUpdate: Array<FilterInterface>;

  @select(['userDatas', 'users']) public users$: Observable<User[]>;
  @select(['userDatas', 'filters']) public filters$: Observable<FilterInterface[]>;

  constants = CommonConstants;

  constructor(private commonService: CommonService,
    private userActions: UsersActions) { }

  ngOnInit() {
    this.handleData();
    this.addSubscriptions();
  }

  addSubscriptions() {
    this.users$.subscribe((users: User[]) => {
      if (users) this.companyFilter = this.getCompanyFlter(users);
    });
    this.filters$.subscribe((resp: FilterInterface[]) => {
      if (!resp || resp.filter) return;
      this.companyFilterUpdate = [...resp];
    });
  }

  getCompanyFlter(users) {
    const companyFilter: Array<FilterInterface> = users.map(user => {
      return {
        id: user.id,
        name: user.company,
        isSelected: false,
      };
    });
    return companyFilter;
  }


  handleData() {
    if (!this.commonService.isDataAvailable()) {
      this.commonService.setData();
      this.userActions.getUsers();
    } else {
      this.userActions.getUsers();
    }
  }

  companyFilters(item: FilterInterface[]) {
    this.userActions.updateFilters(item);
  }
}
