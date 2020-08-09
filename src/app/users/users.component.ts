import { Component, OnInit, ViewChild } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '../subsink/unsubscribe-on-destroy-adapter';
import { UsersDataModel, DropdownInterface, User } from './users.model';
import { CommonService } from '../services/common.service';
import { CommonConstants } from '../constants/common-constants'
import { UserListComponent } from './user-list/user-list.component';
import { Store } from '@ngrx/store';
import { fromRoot } from '../store/index';
import { RootState } from '../store/users.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

  @ViewChild(UserListComponent, { static: true }) userList: UserListComponent;

  usersData = new UsersDataModel();

  constants = CommonConstants;

  constructor(private commonService: CommonService,
    private store: Store<{ rootState: RootState }>) {
    super();
    this.usersData.error$ = this.store.select(fromRoot.getStateError);
    this.usersData.data$ = this.store.select(fromRoot.getStateSelectedData);
  }

  ngOnInit() {
    this.handleData();
    this.addSuccessSubscriptions();
    // this.addErrorSubscriptions();
  }

  addSuccessSubscriptions() {
    this.usersData.data$.subscribe((users: User[]) => {
      if (!users) return;
      this.usersData.users = this.commonService.deeplCloneArray(users);
      if (users) this.usersData.companyFilter = this.getCompanyFlter([...users]);
    }, err => {
      alert(this.constants.somethingWrong);
    });
  }

  addErrorSubscriptions() {
    this.usersData.error$.subscribe((error: string) => {
      if (!error) return;
      alert(error);
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
    if (!this.commonService.isDataAvailable()) this.commonService.setData();
    this.getApiData();
  }

  getApiData() {
    this.store.dispatch(fromRoot.ApiGetMockData({ id: 'randomId' }));
  }

  getError() {
    this.store.dispatch(fromRoot.ApiGetMockDataWithError({ id: 'randomId' }));
  }

  companyFilters(item: DropdownInterface[]) {
    this.usersData.companyFilterUpdate = [...item];
  }

  applyUserFilter(applyFilter: boolean) {
    if (applyFilter) this.userList.filterUsers();
  }
}
