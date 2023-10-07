import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ErrorService } from './error.service';
import { IProduct } from './interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('../assets/data/products.json');
  }

  public getProductsHandleError(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>('')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
