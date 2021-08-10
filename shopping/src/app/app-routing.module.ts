import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';

const routes: Routes = [

  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: UserloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
