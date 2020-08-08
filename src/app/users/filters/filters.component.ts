import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { UsersActions } from 'src/app/actions/users.actions';
import { CommonConstants } from '../../constants/common-constants'
import { DropdownInterface } from '../users.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters: DropdownInterface[] = [];

  constants = CommonConstants;

  constructor(public userActions: UsersActions) { }

  ngOnInit() { }

  removeFilter(filter: DropdownInterface) {
    const removedFilter = this.filters.find(item => item.id === filter.id);
    if (removedFilter) removedFilter.isSelected = false;
    this.userActions.updateFilters(this.filters);
  }

  applyFilter() {
    this.userActions.applyFilter(true);
  }

}
