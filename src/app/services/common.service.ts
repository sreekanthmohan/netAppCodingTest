import { Injectable } from '@angular/core';
import * as Datas from '../test-datas/datas.json';
import { CommonConstants } from '../constants/common-constants.js';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  isDataAvailable() {
    const userData = localStorage.getItem(CommonConstants.userdata);
    // const productData = localStorage.getItem(CommonConstants.filterData);
    return !userData ? false : true;
  }

  setData() {
    const userData = JSON.stringify(Datas.userDatas);
    // const filterData = JSON.stringify([]);
    localStorage.setItem(CommonConstants.userdata, userData);
    // localStorage.setItem(CommonConstants.filterData, filterData);
  }
}
