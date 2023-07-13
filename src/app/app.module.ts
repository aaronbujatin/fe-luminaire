import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { AuthInterceptor } from './security/auth-interceptor';
import { UserService } from './service/user.service';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ToastrModule } from 'ngx-toastr';
import { CartService } from './service/cart.service';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
import { CpuComponent } from './component/product-categories/cpu/cpu.component';
import { CommonModule } from '@angular/common';
import { CaseComponent } from './component/product-categories/case/case.component';
import { CpuCoolingComponent } from './component/product-categories/cpu-cooling/cpu-cooling.component';
import { GraphicsCardComponent } from './component/product-categories/graphics-card/graphics-card.component';
import { HardDiskComponent } from './component/product-categories/hard-disk/hard-disk.component';
import { MotherboardComponent } from './component/product-categories/motherboard/motherboard.component';
import { PowerSupplyComponent } from './component/product-categories/power-supply/power-supply.component';
import { SsdComponent } from './component/product-categories/ssd/ssd.component';
import { RamComponent } from './component/product-categories/ram/ram.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    CpuComponent,
    CaseComponent,
    CpuCoolingComponent,
    GraphicsCardComponent,
    HardDiskComponent,
    MotherboardComponent,
    PowerSupplyComponent,
    SsdComponent,
    RamComponent,
    OrderSuccessComponent,
    ProductDetailsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
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
