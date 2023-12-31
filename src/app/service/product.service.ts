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

  public getAllProductByCategory(category : string) {
    return this.httpClient.get(`${this.apiServiceUrl}/api/v1/products/category/${category}`)
  }

  public getRandomProducts() { 
    return this.httpClient.get(`${this.apiServiceUrl}/api/v1/products/random`)
  }

  public getProductById(id : number) {
    return this.httpClient.get(`${this.apiServiceUrl}/api/v1/products/${id}`);
  }

  
}
