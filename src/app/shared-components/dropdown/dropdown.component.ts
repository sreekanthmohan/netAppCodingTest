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
  @Output() selectedFilters = new EventEmitter<FilterInterface[]>();

  inputItem: string;
  filteredList: FilterInterface[];
  canShow: boolean;
  filters: Array<string> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listUpdate) {
      if (!this.list || this.list.length) return;
      if (!this.listUpdate.length) {
        this.resetFilter();
      } else {
        this.updateFilter(this.listUpdate);
      }
    }
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
    const newList = [...this.filteredList];
    listUpdate.forEach(item => {
      const itemAdded = newList.find(data => data.id === item.id);
      if (itemAdded) itemAdded.isSelected = true;
    });
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

  onFilterSelection(list: FilterInterface[]) {
    this.selectedFilters.emit(list);
  }

  resetForm() {
    this.filteredList.splice(0);
  }

}