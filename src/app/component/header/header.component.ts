import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { User } from 'src/app/model/user.model';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private cartService : CartService,
    private userService : UserService){}

  

  public carts: Cart[] = []

  user : User;
  cartSize: number = 0;

  ngOnInit(): void {
    this.getUserDetails()
    this.getCartsItem()

    this.cartService.buttonClicked$.subscribe(() => {
      // Handle the button click event here
      this.getCartsItem();
      // Perform additional actions as needed
    });
  }

  isAuthenticated() : boolean{
    if(this.userService.getToken){
      return true;
    }
    return false;
  }

  


  public getUserDetails(){
    this.userService.getUserDetails().subscribe(
      (response : User) => {
        this.user = response
        console.log(response);
      }, (error) => {
        console.log(error);
        
      }
    )
  }
 
 
  public getCartsItem() {
    return this.cartService.getCartDetails().subscribe(
      (response:Cart[]) => {
        this.carts = response
        this.cartSize = this.carts.length
        console.log(this.carts.length);
      }, (error) => {
        console.log(error);
      }
    )
  }

  
  







 
  

}
