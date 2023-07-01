import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/cart.model';
import { OrderInput } from 'src/app/model/order-input.model';
import { CartService } from 'src/app/service/cart.service';
import { OrderQuantity } from './../../model/order-quantity.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.fetchProduct()

  }

  orderInput: OrderInput = {
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cc: '',
    orderProductQuantity: [] as { id: number, quantity: number }[]
  }

  public carts: Cart[] = []

  fetchProduct() {
    this.cartService.getCartDetails().subscribe(
      (response: Cart[]) => {
        this.carts = response
        this.getProductDetailsInCart()
        console.log(this.orderInput.orderProductQuantity);
        console.log(this.carts);
      }, (error) => {
        console.log(error);
      }
    )
  }

  //get the product id and quantity in cart
  //put it on the orderQuantity Array

  getProductDetailsInCart() {
    this.carts.forEach(x => {
      this.orderInput.orderProductQuantity.push({
        id: x.product.id,
        quantity: x.quantity
      });
    });


  }



  placeOrder() {
    this.orderService.placeOrder(this.orderInput).subscribe(
      (response) => {
        console.log(response);

      }, (error) => {
        console.log(error);

      }
    )


  }



}
