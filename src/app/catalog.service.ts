import { Injectable } from '@angular/core';
import { categories } from './constants/catalog';
import { ICatalog } from './interface/catalog';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  public categories: ICatalog[] = [];

  constructor() {
    this.categories = [...categories];
  }

  public getCategories(): ICatalog[] {
    return this.categories;
  }
}
