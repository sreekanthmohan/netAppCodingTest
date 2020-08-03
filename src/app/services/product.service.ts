import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestDataInterface } from '../models/common.model';
import * as Datas from '../test-datas/datas.json';
import { CommonConstants } from '../constants/common-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getContent(): Observable<TestDataInterface[]> {
    const productData = localStorage.getItem(CommonConstants.productData);
    const respData = JSON.parse(productData);
    return of(respData);
  }
}
