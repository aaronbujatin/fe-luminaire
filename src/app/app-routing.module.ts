import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductCarouselComponent } from './component/product-carousel/product-carousel.component';
import { CartComponent } from './component/cart/cart.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "carousel", component: ProductCarouselComponent },
  { path: "cart", component: CartComponent},
  { path: "reg", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {path : "forbidden", component : ForbiddenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
