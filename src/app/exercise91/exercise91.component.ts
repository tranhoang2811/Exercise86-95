import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-exercise91',
  templateUrl: './exercise91.component.html',
  styleUrls: ['./exercise91.component.css'],
})
export class Exercise91Component {
  public products: IProduct[] = [];
  public errorMessage: string = '';

  constructor(private productHttpService: ProductHttpService) {
    this.productHttpService.getProductsHandleError().subscribe({
      next: (products: IProduct[]) => {
        this.products = products;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
