import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServiceUrl = 'http://localhost:8080'

  constructor(private httpClient : HttpClient) { }

  public getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<any>(`${this.apiServiceUrl}/api/v1/products`);
  }

  
}
