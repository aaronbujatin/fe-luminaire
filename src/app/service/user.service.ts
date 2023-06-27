import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApi = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );

  public registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.userApi}/api/v1/auth/signup`, user);
  }
  // public registerUser2(user: User):Observable<any>  {
  //   return this.httpClient.post<User>(`${this.userApi}/api/v1/auth/sign`, user);
  // }

  public loginUser(user: Login): Observable<User> {
    return this.httpClient.post<any>(`${this.userApi}/api/v1/auth/signin`, user, { headers: this.requestHeader });
  }

  public setRoles(roles: []) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem("roles"));
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken)
  }

  public getToken(): string {
    return localStorage.getItem("jwtToken");
  }

  public clear() {
    localStorage.clear()
  }

  public isLoggedIn() {
    return this.getToken();
  }

}
