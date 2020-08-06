import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterInterface } from 'src/app/models/common.model';
import { select } from '@angular-redux/store';
import { UsersActions } from 'src/app/actions/users.actions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @select(['userDatas', 'filters']) public filters$: Observable<FilterInterface[]>;
  filters: FilterInterface[] = [];
  displayFilter: FilterInterface[] = [];
  apply = false;

  constructor(public userActions: UsersActions) { }

  ngOnInit() {
    this.filters$.subscribe((filters: FilterInterface[]) => {
      this.filters = filters;
    });
  }

  removeFilter(filter: FilterInterface) {
    const removedFilter = this.filters.find(item => item.id === filter.id);
    if (removedFilter) removedFilter.isSelected = false;
    this.userActions.updateFilters(this.filters);
  }

  applyFilter() {
    this.userActions.applyFilter(true);
  }

}
