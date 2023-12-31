import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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

  public carts: Cart[] = []
  addToCart(cart : Cart){
    return this.httpClient.post(this.url, cart);

  }

  public incrementQuantity(cart : Cart) {
    return this.httpClient.post(this.url + "/increment", cart)
  }

  public decrementQuantity(cart : Cart) {
    return this.httpClient.post(this.url + "/decrement", cart)
  }
  
  public deletProduct(cart : number) {
    return this.httpClient.delete(this.url + `/${cart}`);
  }
 
  private cartSizeSubject = new BehaviorSubject<number>(0);
  cartSize$ = this.cartSizeSubject.asObservable();


  public getCartDetails() {
    return this.httpClient.get(this.url);
  }

  private cartSize = new BehaviorSubject<number>(0);

  getCartSize() {
    return this.cartSize.asObservable();
  }

  updateCartSize(size: number) {
    this.cartSize.next(size);
  }
  

}
