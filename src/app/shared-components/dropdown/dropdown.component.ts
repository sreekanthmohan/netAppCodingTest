import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestDataInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() list: TestDataInterface[];
  @Output() selectItem = new EventEmitter<TestDataInterface>();

  inputItem: string;
  filteredList: TestDataInterface[];

  constructor() { }

  ngOnInit() { }

  onkeyup(value: string) {
    if (value) {
      this.filteredList = this.list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    } else {
      this.filteredList = [...this.list];
    }
  }

  onInputClick() {
    if (!this.inputItem) {
      this.filteredList = [...this.list];
    }
  }

  onItemSelection(item: TestDataInterface) {
    this.inputItem = item.name;
    this.selectItem.emit(item);
    this.resetForm();
  }

  resetForm() {
    this.filteredList.splice(0);
  }

}