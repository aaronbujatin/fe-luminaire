import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { AuthGuard } from './security/auth.guard';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "cart", component: CartComponent},
  { path: "signup", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path : "forbidden", component : ForbiddenComponent},
  { path: "checkout", component : CheckoutComponent},
  { path: "history", component : OrderHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
