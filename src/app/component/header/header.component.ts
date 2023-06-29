import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  totalItem : number = 0


  user : User;

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(
      (response : User) => {
        this.user = response
        console.log(response);
      }, (error) => {
        console.log(error);
        
      }
    )
  }

  isAuthenticated() : boolean{
    if(this.userService.getToken){
      return true;
    }
    return false;
  }

  public getUserDetails(){

    return this.userService.getUserDetails();

  }


 
  

}
