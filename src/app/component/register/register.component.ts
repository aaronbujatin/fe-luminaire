import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageSrc: string | ArrayBuffer;

  constructor(private userService: UserService, private router : Router) { }
  ngOnInit(): void {
  }

  user: User = new User();
  password_confirmation: string;

  register() {
    if (this.user.password === this.password_confirmation) {
      //   this.userService.registerUser(this.user).subscribe(
      //     (response : User) => {
      //       console.log(response);
      //     },(error : HttpErrorResponse) => {
      //       console.log(error);
      //     }
      //   )
      // }else {
      console.log("password not match");

    }

  }

  onSubmit(user: NgForm) {
    if (this.user.password === this.password_confirmation) {
      const formData = new FormData();
      formData.append('name', this.user.name);
      formData.append('email', this.user.email);
      formData.append('username', this.user.username);
      formData.append('password', this.user.password);
      formData.append('image', this.user.image, this.user.image.name);
      this.userService.registerUser(formData).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/login']);
        }, (error) => {
          console.log(error);
          this.router.navigate(['/login']);
        }
      )
    }



  }
  onFileSelected(event) {
    const image = this.user.image = event.target.files[0];
    console.log(image);
  }


  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }


 

}
