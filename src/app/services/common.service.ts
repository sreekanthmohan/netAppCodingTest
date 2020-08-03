import { Injectable } from '@angular/core';
import * as Datas from '../test-datas/datas.json';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  isDataAvailable() {
    const userData = localStorage.getItem('userData');
    const productData = localStorage.getItem('productData');
    return !userData || !productData ? false : true;
  }

  setData() {
    const userData = JSON.stringify(Datas.userDatas);
    const productData = JSON.stringify(Datas.productDatas);
    localStorage.setItem('userData', userData);
    localStorage.setItem('productData', productData);
  }
}
