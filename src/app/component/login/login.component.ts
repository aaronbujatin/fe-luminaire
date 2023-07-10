import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService : UserService, private router : Router){}


 login : Login = new Login();
  onSubmit(){
    this.userService.loginUser(this.login).subscribe(
      (response : any) => {
        console.log(this.login)
        console.log(response.accessToken);
        this.userService.setToken(response.accessToken);
        this.navigateToPage()
        this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });
      },(error : HttpErrorResponse) => {
        console.log(error);
        
      }
    )
  }

  navigateToPage(): void {
    const url = "";
    this.router.navigateByUrl(url, { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }


}
