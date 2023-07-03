import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
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
    private cartService : CartService,
    private toast: NgToastService,
    private toastr : ToastrService){}

  user : User = new User;
  product : Product = new Product
  cart : Cart = new Cart
  public carts: Cart[] = []
  
  productList : any;
  ngOnInit(): void {
    this.getAllProducts();
   
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

 
  cartSize : number


  fetchProduct() {
    this.cartService.getCartDetails().subscribe(
      (response: Cart[]) => {
        this.carts = response
        this.cartSize =this.carts.length
        console.log(this.cartSize);
        
        console.log(this.carts);
      }, (error) => {
        console.log(error);
      }
    )
  }
  
  
  addToCart(product : Product){
    this.cart.user = this.user
    this.cart.product = product
    this.cart.quantity = 1
    this.cartService.addToCart(this.cart).subscribe(
      (response) => {
        this.showSuccess()
        this.fetchProduct()
        this.cartService.setCartSize(this.cartSize)
        console.log(response);
      }, (error) => {
       
        console.log(error);
      }
    )
  }

  
  showSuccess() {
    this.toastr.success("Item added to cart","",{
      positionClass: 'toast-bottom-left' 
   });
  }

  
  onClick(): void {
    this.cartService.triggerButtonClick();
  }




}
