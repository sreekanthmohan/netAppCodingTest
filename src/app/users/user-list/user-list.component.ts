import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { UsersActions } from 'src/app/store/users.actions';
import { CommonConstants } from '../../constants/common-constants'
import { DropdownInterface, User } from '../users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() companyFilter: DropdownInterface[];
  @Input() users: User[];

  constants = CommonConstants;

  constructor() { }

  ngOnInit() { }

  filterUsers() {
    this.companyFilter.forEach(filter => {
      const isUser = this.users.find(user => user.id === filter.id);
      if (isUser) isUser.isSelected = filter.isSelected;
    });
  }

}
