import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../interface/customer';

@Component({
  selector: 'app-exercise92',
  templateUrl: './exercise92.component.html',
  styleUrls: ['./exercise92.component.css'],
})
export class Exercise92Component {
  public customer: ICustomer | undefined;
  public errorMessage: string = '';

  constructor(private customerService: CustomerService) {
    this.customerService.getCustomer().subscribe({
      next: (customer: ICustomer) => (this.customer = customer),
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
