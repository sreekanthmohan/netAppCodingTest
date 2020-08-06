import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters, FilterInterface } from 'src/app/models/common.model';
import { select } from '@angular-redux/store';
import { FilterActions } from 'src/app/actions/filter.actions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @select('filters') public filters$: Observable<Filters>;

  constructor(private filterActions: FilterActions) { }

  ngOnInit() {
    this.filters$.subscribe((filters: Filters) => {
      // if (users) this.companyFilter = this.getCompanyFlter(users);
      console.log('filters', filters);

    });
  }

  removeFilter(filter: FilterInterface) {
    this.filterActions.deleteFilter(filter.id);
  }

}
