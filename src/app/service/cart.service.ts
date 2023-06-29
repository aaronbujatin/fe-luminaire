import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient : HttpClient) { }

  private url = "http://localhost:8080/api/v1/cart"

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);


  addToCart(cart : Cart){
    return this.httpClient.post(this.url, cart);

  }

  public incrementQuantity(cart : Cart) {
    return this.httpClient.post(this.url + "/increment", cart)
  }

  public decrementQuantity(cart : Cart) {
    return this.httpClient.post(this.url + "/decrement", cart)
  }
  

 

  public getCartDetails(){
    return this.httpClient.get(this.url);
  }

}
