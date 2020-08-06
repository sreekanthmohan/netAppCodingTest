import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { FilterInterface, User } from 'src/app/models/common.model';
import { UsersActions } from 'src/app/actions/users.actions';
import { CommonConstants } from '../../../constants/common-constants'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userData: User[];
  filters: FilterInterface[];

  constants = CommonConstants;

  @select(['userDatas', 'users']) public users$: Observable<User[]>;
  @select(['userDatas', 'filters']) public filters$: Observable<FilterInterface[]>;
  @select(['userDatas', 'applyFilter']) public applyFilter$: Observable<boolean>;

  constructor(private userActions: UsersActions) { }

  ngOnInit() {
    this.addSubscriptions();
  }

  addSubscriptions() {
    this.users$.subscribe((resp: User[]) => {
      this.userData = resp;
    });
    this.filters$.subscribe((resp: FilterInterface[]) => {
      this.filters = resp;
    });
    this.applyFilter$.subscribe((resp: boolean) => {
      if (resp) this.filterUsers();
    });
  }

  filterUsers() {
    this.filters.forEach(filter => {
      const user = this.userData.find(user => user.id === filter.id);
      if (user) user.isSelected = filter.isSelected;
    });
    this.userActions.applyFilter(false);
  }

}
