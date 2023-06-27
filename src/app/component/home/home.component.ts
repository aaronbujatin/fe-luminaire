import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { User } from 'src/app/model/user.model';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private productService : ProductService, 
    private cartService : CartService){}

  user : User = new User;
  product : Product = new Product
  cart : Cart = new Cart
  
  productList : any;
  ngOnInit(): void {
    this.getAllProducts();
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1, total:a.price});
    })
  }


  public products: Product[] = [];

  public getAllProducts() : void {
    this.productService.getAllProducts().subscribe(
      (response : Product[]) => {
        this.products = response
        
        console.log(response);
      },
      (error :HttpErrorResponse) => {
        console.log(error);
      }
    )
  }
  
  addToCart(product : Product){
    this.cart.user = this.user
    this.cart.product = product
    this.cartService.addToCart(this.cart).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
