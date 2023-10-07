import { Component } from '@angular/core';
import { products } from '../constants/product';

@Component({
  selector: 'app-exercise87',
  templateUrl: './exercise87.component.html',
  styleUrls: ['./exercise87.component.css'],
})
export class Exercise87Component {
  public products = [...products];
}
