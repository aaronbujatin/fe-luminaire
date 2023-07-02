import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { ProductCarouselComponent } from './component/product-carousel/product-carousel.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { AuthInterceptor } from './security/auth-interceptor';
import { UserService } from './service/user.service';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import {ToastrModule} from 'ngx-toastr';
import { CartService } from './service/cart.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCarouselComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(
      {}
    )
  


  ],
  providers: [
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
