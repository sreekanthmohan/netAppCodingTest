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
    return !userData ? false : true;
  }

  setData() {
    const userData = JSON.stringify(Datas.userDatas);
    localStorage.setItem(CommonConstants.userdata, userData);
  }

  deeplCloneArray(data: Array<any>) {
    return data.map(x => Object.assign({}, x));
  }
}
