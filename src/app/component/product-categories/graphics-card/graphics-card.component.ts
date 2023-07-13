import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { User } from 'src/app/model/user.model';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-graphics-card',
  templateUrl: './graphics-card.component.html'
  
})
export class GraphicsCardComponent {


  constructor(private productService : ProductService, private cartService : CartService,private toastr: ToastrService){}

  products : Product []


  ngOnInit(): void {
      let category = "graphicscard";
      this.productService.getAllProductByCategory(category).subscribe(
        (response : any) => {
          this.products = response
          console.log(response);
        }, (error) => {
          console.log(error);
          
        }
      )
  }
  user: User = new User;
  product: Product = new Product
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
