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
    this.total

  }

  grandTotal = this.getGrandTotal()

  total : number = 0
  getGrandTotal() {
    
    for (const cartItem of this.carts) {
     
      const productTotal = cartItem.total; 
     
      this.total += productTotal;
    }
    console.log(this.total);
    return this.total;
 
    
  }

  incrementQuantity(cart: Cart) {
    this.cartService.incrementQuantity(cart).subscribe(
      (response) => {
        
        this.fetchProduct()
        this.getGrandTotal()
   
      }, (error) => {
        console.log(error);
      }
    )
  }

  decrementQuantity(cart: Cart) {
    this.cartService.decrementQuantity(cart).subscribe(
      (response) => {
        this.getGrandTotal()
        this.fetchProduct()
        
      
      }, (error) => {
        console.log(error);
      }
    )
  }

  fetchProduct() {
    this.cartService.getCartDetails().subscribe(
      (response: Cart[]) => {
        this.carts = response
        console.log(this.carts);
      }, (error) => {
        console.log(error);
      }
    )
  }


}
