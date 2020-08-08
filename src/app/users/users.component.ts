import { Component, OnInit, ViewChild } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '../subsink/unsubscribe-on-destroy-adapter';
import { UsersDataModel, DropdownInterface, User } from './users.model';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { UsersActions } from '../store/users.actions';
import { select } from '@angular-redux/store';
import { CommonConstants } from '../constants/common-constants'
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

  @ViewChild(UserListComponent, { static: true }) userList: UserListComponent;

  usersData = new UsersDataModel();

  @select(['userDatas', 'users']) public users$: Observable<User[]>;

  constants = CommonConstants;

  constructor(private commonService: CommonService,
    private userActions: UsersActions) {
    super();
  }

  ngOnInit() {
    this.handleData();
    this.addSubscriptions();
  }

  addSubscriptions() {
    this.users$.subscribe((users: User[]) => {
      this.usersData.users = [...users];
      if (users) this.usersData.companyFilter = this.getCompanyFlter(users);
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
    this.usersData.companyFilterUpdate = [...item];
  }

  applyUserFilter(applyFilter: boolean) {
    if (applyFilter) this.userList.filterUsers();
  }
}
