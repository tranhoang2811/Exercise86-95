import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ErrorService } from './error.service';
import { ICustomer, ICustomerType } from './interface/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getCustomerTypes(): Observable<ICustomerType[]> {
    return this.httpClient
      .get<ICustomerType[]>('../assets/data/customers.json')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public getCustomer(): Observable<ICustomer> {
    return this.httpClient
      .get<ICustomer>('../assets/data/customer.json')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
