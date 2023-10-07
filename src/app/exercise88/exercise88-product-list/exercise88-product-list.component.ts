import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-exercise88-product-list',
  templateUrl: './exercise88-product-list.component.html',
  styleUrls: ['./exercise88-product-list.component.css'],
})
export class Exercise88ProductListComponent {
  public products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }
}
