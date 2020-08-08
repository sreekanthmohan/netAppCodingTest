import { Component, OnInit } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '../subsink/unsubscribe-on-destroy-adapter';
import { UsersDataModel, UsersDataInterface, DropdownInterface, User } from './users.model';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { UsersActions } from '../actions/users.actions';
import { select } from '@angular-redux/store';
import { CommonConstants } from '../constants/common-constants'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

  usersData = new UsersDataModel();

  companyFilter: Array<DropdownInterface>;
  companyFilterUpdate: Array<DropdownInterface>;

  @select(['userDatas', 'users']) public users$: Observable<User[]>;
  @select(['userDatas', 'filters']) public filters$: Observable<DropdownInterface[]>;

  constants = CommonConstants;

  constructor(private commonService: CommonService,
    private userActions: UsersActions) {
    super()
  }

  ngOnInit() {
    this.handleData();
    this.addSubscriptions();
  }

  addSubscriptions() {
    this.users$.subscribe((users: User[]) => {
      if (users) this.usersData.companyFilter = this.getCompanyFlter(users);
    });
    this.filters$.subscribe((resp: DropdownInterface[]) => {
      if (!resp) return;
      this.usersData.companyFilterUpdate = [...resp];
    });
  }

  getCompanyFlter(users) {
    const companyFilter: Array<DropdownInterface> = users.map(user => {
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

  companyFilters(item: DropdownInterface[]) {
    this.userActions.updateFilters(item);
  }
}
