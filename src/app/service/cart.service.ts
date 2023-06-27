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

  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(cart : Cart){
    return this.httpClient.post(this.url, cart);

  }

  getTotalPrice(){
    let total = 0
    this.cartItemList.map((a:any) => {
      total +=  a.total;
    })
  }

  removeToCart(product : any) {
    this.cartItemList.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }

  removeAllToCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  public getCartDetails(){
    return this.httpClient.get(this.url);
  }

}
