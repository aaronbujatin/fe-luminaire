import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  public products = []
  public carts: Cart[] = []
  public productInCart = []

  ngOnInit(): void {
    this.fetchProduct()

  }



  grandTotal: number = 0
  total: number = 0


  calculateTotalProducts(): void {
    this.grandTotal = 0;
    this.fetchProduct
    this.carts.forEach((cartItem) => {
      this.grandTotal += cartItem.total;
    });
  }

  incrementQuantity(cart: Cart) {
    this.cartService.incrementQuantity(cart).subscribe(
      (response) => {
        this.fetchProduct()
        this.calculateTotalProducts
      }, (error) => {
        console.log(error);
      }
    )
  }

  decrementQuantity(cart: Cart) {
    this.cartService.decrementQuantity(cart).subscribe(
      (response) => {
        this.fetchProduct()
        this.calculateTotalProducts
      }, (error) => {
        console.log(error);
      }
    )
  }

  fetchProduct() {
    this.cartService.getCartDetails().subscribe(
      (response: Cart[]) => {
        this.carts = response
        this.calculateTotalProducts()
        console.log(this.carts);
        console.log(this.grandTotal);


      }, (error) => {
        console.log(error);
      }
    )
  }

  public deleteProductFromCart(cart: number) {
    this.cartService.deletProduct(cart).subscribe(
      (response) => {
        console.log(response);
        this.fetchProduct();
      }, (error) => {
        console.log(error);
        this.fetchProduct()
      }
    )
  }


}
