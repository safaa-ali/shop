import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'cart', component: ShopingCartComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
