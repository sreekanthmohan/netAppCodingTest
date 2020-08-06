import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FilterInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnChanges {

  @Input() list: FilterInterface[];
  @Input() listUpdate: FilterInterface[];
  @Input() header: string;
  @Output() selectedFilters = new EventEmitter<FilterInterface>();

  inputItem: string;
  filteredList: FilterInterface[];
  canShow: boolean;
  filters: Array<string> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listUpdate) {
      if (!this.listUpdate.length && this.filteredList) {
        this.resetFilter();
      } else {
        this.updateFilter(this.listUpdate)
      }
    }
    // console.log(changes)
  }

  ngOnInit() { }

  onkeyup(value: string) {
    if (value) {
      this.filteredList = this.list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    } else {
      this.filteredList = [...this.list];
    }
  }

  updateFilter(listUpdate: Array<FilterInterface>) {
    listUpdate.forEach(item => {
      const itemAdded = this.filteredList.find(data => data.id === item.id);
      if (item.isSelected && itemAdded) itemAdded.isSelected = true;
    })
  }

  resetFilter() {
    this.filteredList.forEach(item => {
      item.isSelected = false;
    })
  }

  onInputClick() {
    if (!this.inputItem) {
      this.filteredList = [...this.list];
      this.canShow = !this.canShow;
    }
  }

  // addFilter(item: string) {
  //   this.filters.push(item);
  //   console.log('added', this.filters);    
  // }

  // removeFilter(item: string) {
  //   const index = this.filters.indexOf(item);
  //   if (index > 0) this.filters.splice(index, 1);
  //   console.log('added', this.filters);
  // }

  onFilterSelection(item: FilterInterface) {
    // console.log('item', item);

    // this.inputItem = item.name;
    this.selectedFilters.emit(item);
    // this.resetForm();
  }

  resetForm() {
    this.filteredList.splice(0);
  }

}