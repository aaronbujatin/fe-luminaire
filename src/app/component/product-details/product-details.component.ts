import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { User } from 'src/app/model/user.model';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {

  constructor(private productService : ProductService, 
    private router : Router, 
    private route : ActivatedRoute, 
    private cartService : CartService,
    private toastr: ToastrService){}

  ngOnInit() {
    this.route.params.subscribe(params => this.getProductById(params['id']));
    console.log(this.product);
    
  }

  product : Product

  public getProductById(id:number) {
    this.productService.getProductById(id).subscribe(
      (response : Product) => {
        this.product = response
        console.log(this.product);
      }, (error) => {
        console.log(error);
      }
    )
  }

  user: User = new User;
  cart: Cart = new Cart
  public carts: Cart[] = []
  cartSize : number
  
  addToCart(product: Product) {
    this.cart.user = this.user
    this.cart.product = product
    this.cart.quantity = 1
    this.cartService.addToCart(this.cart).subscribe(
      (response) => {
        this.showSuccess()
        // this.fetchProduct()
        // 
        this.cartService.getCartDetails().subscribe(
          (response: Cart[]) => {
            this.carts = response
            this.cartSize = this.carts.length
            console.log(this.cartSize);
            this.cartService.updateCartSize(this.cartSize);
            console.log(this.carts);
            console.log(this.carts.length);
         
          }, (error) => {
            console.log(error);
          }
        )
        
      }, (error) => {

        console.log(error);
      }
    )
  }

  showSuccess() {
    this.toastr.success("Item added to cart", "", {
      positionClass: 'toast-bottom-left'
    });
  }

}
