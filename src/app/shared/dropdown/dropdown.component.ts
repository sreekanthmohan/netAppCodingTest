import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { DropdownInterface } from 'src/app/users/users.model';
import { DropdownModel } from './dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {

  @Input() list: DropdownInterface[];
  @Input() listUpdate: DropdownInterface[];
  @Input() header: string;
  @Output() selectedFilters = new EventEmitter<DropdownInterface[]>();

  dropdownData = new DropdownModel();

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

  onkeyup(value: string) {
    if (value) {
      this.dropdownData.filteredList = this.list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    } else {
      this.dropdownData.filteredList = [...this.list];
    }
  }

  updateFilter(listUpdate: Array<DropdownInterface>) {
    const newList = [...this.dropdownData.filteredList];
    listUpdate.forEach(item => {
      const itemAdded = newList.find(data => data.id === item.id);
      if (itemAdded) itemAdded.isSelected = true;
    });
  }

  resetFilter() {
    this.dropdownData.filteredList.forEach(item => {
      item.isSelected = false;
    })
  }

  onInputClick() {
    if (!this.dropdownData.inputItem) {
      this.dropdownData.filteredList = [...this.list];
      this.dropdownData.canShow = !this.dropdownData.canShow;
    }
  }

  onFilterSelection(list: DropdownInterface[]) {
    this.selectedFilters.emit(list);
  }

  resetForm() {
    this.dropdownData.filteredList.splice(0);
  }

}