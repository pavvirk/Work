import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { Product2Component } from './product2/Product2.Component'
import { WelcomeLoginComponent } from './welcome-login/welcome-login.component'
import { AddProductsComponent } from './add-products/add-products.component'
import { ProductComponent } from './product/product.component'
import { from } from 'rxjs';

const appRoute:Routes=[
  { path:'',component:WelcomeLoginComponent },
  { path:'product2', component:Product2Component },
  { path:'add-prod', component:AddProductsComponent },
  { path:'prods', component:ProductComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
