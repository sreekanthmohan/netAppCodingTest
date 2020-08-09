import { Component, OnInit, Input } from '@angular/core';
import { CommonConstants } from '../../constants/common-constants'
import { DropdownInterface, User } from '../users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() companyFilter: DropdownInterface[];
  @Input() users: User[];

  constants = CommonConstants;

  constructor() { }

  filterUsers() {
    this.companyFilter.forEach(filter => {
      const isUser = this.users.find(user => user.id === filter.id);
      if (isUser) isUser.isSelected = filter.isSelected;
    });
  }

}
