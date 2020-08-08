import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonConstants } from '../../constants/common-constants'
import { DropdownInterface } from '../users.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters: DropdownInterface[] = [];
  @Output() applyFilter = new EventEmitter<boolean>();

  constants = CommonConstants;

  constructor() { }

  ngOnInit() { }

  removeFilter(filter: DropdownInterface) {
    this.applyFilter.emit(false);
    const removedFilter = this.filters.find(item => item.id === filter.id);
    if (removedFilter) removedFilter.isSelected = false;
  }
}
