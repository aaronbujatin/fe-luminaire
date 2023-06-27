import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { UserService } from 'src/app/service/user.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.headers.get("No-Auth") === "True") {
            return next.handle(req.clone());
        }

        const token = this.userService.getToken();
        req = this.addTokenToHeader(req, token);
        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    if (err.status === 401) {
                        console.log(err.status);
                        this.router.navigate(['/login']);
                    } else if (err.status === 403) {
                        console.log(err.status);
                        this.router.navigate(['/login']);
                    }
                    return throwError("Something went wrong");
                }
            )
        );
    }

    private addTokenToHeader(httpRequest: HttpRequest<any>, token: string) {
        return httpRequest.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

}