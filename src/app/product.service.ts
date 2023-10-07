import { Injectable } from '@angular/core';
import { products } from './constants/product';
import { IProduct } from './interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: IProduct[] = [...products];

  constructor() {}

  public getProducts(): IProduct[] {
    return this.products;
  }
}
