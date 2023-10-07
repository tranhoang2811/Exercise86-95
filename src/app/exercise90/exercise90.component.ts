import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-exercise90',
  templateUrl: './exercise90.component.html',
  styleUrls: ['./exercise90.component.css'],
})
export class Exercise90Component {
  public products: IProduct[] = [];

  constructor(private productHttpService: ProductHttpService) {
    this.productHttpService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
    });
  }
}
