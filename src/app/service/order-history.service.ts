import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private httpClient:HttpClient) { }
  private url = "http://localhost:8080/api/v1/orders"

  public getOrderHistory(){
    return this.httpClient.get(this.url + "/history")
  }

}
