import { Component, OnInit, ApplicationRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FilterInterface, Users, Filters } from 'src/app/models/common.model';
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
  // productData: Array<FilterInterface>;
  companyFilter: Array<FilterInterface>;
  companyFilterUpdate: Array<FilterInterface>;

  @select('users') public users$: Observable<Users>;
  @select('filters') public filters$: Observable<Filters>;

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
      console.log('users', users);

    });
    this.filters$.subscribe((resp: Filters) => {
      // if (users) this.companyFilter = this.getCompanyFlter(users);
      console.log('filters', resp);
      this.companyFilterUpdate = [...resp.filters];
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
      // this.getDatas();
    } else {
      this.userActions.getUsers();
    }
  }

  companyFilters(item: FilterInterface) {
    item.isSelected ? this.filterActions.addFilter(item) : this.filterActions.deleteFilter(item.id);
    console.log(CommonConstants.itemId, item);
    // alert(CommonConstants.itemId + item.id);
  }
}
