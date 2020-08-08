import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { UsersActions } from 'src/app/actions/users.actions';
import { CommonConstants } from '../../constants/common-constants'
import { UnsubscribeOnDestroyAdapter } from 'src/app/subsink/unsubscribe-on-destroy-adapter';
import { UsersDataInterface } from '../users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

  @Input() usersData: UsersDataInterface;
  @select(['userDatas', 'applyFilter']) private applyFilter$: Observable<boolean>;

  constants = CommonConstants;

  constructor(private userActions: UsersActions) {
    super();
  }

  ngOnInit() {
    this.subs.sink = this.applyFilter$.subscribe((filterStatus: boolean) => {
      if (filterStatus) this.filterUsers();
    });
  }


  filterUsers() {
    this.usersData.companyFilterUpdate.forEach(filter => {
      const isUser = this.usersData.users.find(user => user.id === filter.id);
      if (isUser) isUser.isSelected = filter.isSelected;
    });
    this.userActions.applyFilter(false);
  }

}
