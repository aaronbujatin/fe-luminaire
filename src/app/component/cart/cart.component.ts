import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  public products: Product[] = [];

  ngOnInit(): void {
    this.cartService.getCartDetails().subscribe(
      (response) => {
        console.log("api cart response");
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

  quantity: number = 1;

  incrementQuantity() {
    if (this.quantity < 100) {
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }

  }

}
