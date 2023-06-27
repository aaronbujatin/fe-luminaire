import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private userService:UserService){}
  ngOnInit(): void { 
  }

  user : User = new User();
  password_confirmation : string;
  
  register(){
    if(this.user.password === this.password_confirmation){
      this.userService.registerUser(this.user).subscribe(
        (response : User) => {
          console.log(response);
        },(error : HttpErrorResponse) => {
          console.log(error);
        }
      )
    }else {
      console.log("password not match");
      
    }

   
  }

}
