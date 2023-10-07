import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-exercise89-product-list',
  templateUrl: './exercise89-product-list.component.html',
  styleUrls: ['./exercise89-product-list.component.css']
})
export class Exercise89ProductListComponent {
  @Input() public products: IProduct[] = [];
}
