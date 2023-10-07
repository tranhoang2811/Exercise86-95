import { Component } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';
import { ICatalog } from 'src/app/interface/catalog';

@Component({
  selector: 'app-exercise89-category-list',
  templateUrl: './exercise89-category-list.component.html',
  styleUrls: ['./exercise89-category-list.component.css'],
})
export class Exercise89CategoryListComponent {
  public categories: ICatalog[] = [];

  constructor(private catalogService: CatalogService) {
    this.categories = catalogService.getCategories();
  }
}
