import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterInterface } from 'src/app/models/common.model';
import { select } from '@angular-redux/store';
import { FilterActions } from 'src/app/actions/filter.actions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @select('filters') public filters$: Observable<FilterInterface[]>;
  filters: FilterInterface[] = [];
  displayFilter: FilterInterface[] = [];

  constructor(private filterActions: FilterActions) { }

  ngOnInit() {
    this.filters$.subscribe((filters: FilterInterface[]) => {
      this.filters = filters;
    });
  }

  removeFilter(filter: FilterInterface) {
    const removedFilter = this.filters.find(item => item.id === filter.id);
    if (removedFilter) removedFilter.isSelected = false;
    this.filterActions.updateFilters(this.filters);
  }

}
