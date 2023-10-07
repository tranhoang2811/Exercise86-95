import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { ICustomerType } from 'src/app/interface/customer';

@Component({
  selector: 'app-exercise93',
  templateUrl: './exercise93.component.html',
  styleUrls: ['./exercise93.component.css'],
})
export class Exercise93Component {
  public customerTypes: ICustomerType[] = [];
  public errorMessage: string = '';

  constructor(private customerService: CustomerService) {
    this.customerService.getCustomerTypes().subscribe({
      next: (customerTypes: ICustomerType[]) =>
        (this.customerTypes = customerTypes),
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
