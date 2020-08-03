import { Component, OnInit, ApplicationRef } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { TestDataInterface, CombinedDataInterface } from 'src/app/models/common.model';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData: Array<TestDataInterface>;
  productData: Array<TestDataInterface>;

  constructor(private commonService: CommonService,
    private productService: ProductService,
    private userService: UserService) { }

  ngOnInit() {
    this.handleData();
  }

  handleData() {
    if (!this.commonService.isDataAvailable()) {
      this.commonService.setData();
      this.getDatas();
    } else {
      this.getDatas();
    }
  }

  getDatas() {
    const productData = this.productService.getContent();
    const userData = this.userService.getContent();
    combineLatest([productData, userData]).subscribe(([productsData, usersData]) => {
      this.productData = productsData;
      this.userData = usersData;
    }, err => {
      alert('Data Loading Failed, Something Went Wrong');
      console.log('data loading error', err);
    });
  }

  itemSelcted(item: TestDataInterface) {
    console.log('selected Item:', item);
    alert('Selected Item Id ' + item.id);
  }
}
