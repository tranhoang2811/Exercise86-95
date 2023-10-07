import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/constants/product';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-exercise88-product-details',
  templateUrl: './exercise88-product-details.component.html',
  styleUrls: ['./exercise88-product-details.component.css']
})
export class Exercise88ProductDetailsComponent {
  public product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId: number = Number(routeParams.get('id'));
    this.product = products.find((product: IProduct) => product.id === productId);
  }

  public goBack(): void {
    this.router.navigate(['/exercise-88/products']);
  }
}
