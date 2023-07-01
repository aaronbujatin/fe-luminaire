import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderInput } from '../model/order-input.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient : HttpClient) { }


  private url = "http://localhost:8080/api/v1/orders"

  public placeOrder(orderInput : OrderInput) {
    return this.httpClient.post(this.url, orderInput);
  }

}
