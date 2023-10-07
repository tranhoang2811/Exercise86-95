import { Component } from '@angular/core';
import { product } from '../constants/product';

@Component({
  selector: 'app-exercise86',
  templateUrl: './exercise86.component.html',
  styleUrls: ['./exercise86.component.css'],
})
export class Exercise86Component {
  public product = { ...product };
}
