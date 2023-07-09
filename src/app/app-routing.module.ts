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
import { CaseComponent } from './component/product-categories/case/case.component';
import { CpuComponent } from './component/product-categories/cpu/cpu.component';
import { CpuCoolingComponent } from './component/product-categories/cpu-cooling/cpu-cooling.component';
import { GraphicsCardComponent } from './component/product-categories/graphics-card/graphics-card.component';
import { HardDiskComponent } from './component/product-categories/hard-disk/hard-disk.component';
import { MotherboardComponent } from './component/product-categories/motherboard/motherboard.component';
import { PowerSupplyComponent } from './component/product-categories/power-supply/power-supply.component';
import { SsdComponent } from './component/product-categories/ssd/ssd.component';
import { RamComponent } from './component/product-categories/ram/ram.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "cart", component: CartComponent},
  { path: "signup", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path : "forbidden", component : ForbiddenComponent},
  { path: "checkout", component : CheckoutComponent},
  { path: "history", component : OrderHistoryComponent},
  { path: "case", component : CaseComponent},
  { path: "cpu", component : CpuComponent},
  { path: "cpu-cooling", component : CpuCoolingComponent},
  { path: "graphics-card", component : GraphicsCardComponent},
  { path: "hard-disk", component : HardDiskComponent},
  { path: "motherboard", component : MotherboardComponent},
  { path: "power-supply", component : PowerSupplyComponent},
  { path: "ssd", component : SsdComponent},
  { path: "ram", component : RamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
