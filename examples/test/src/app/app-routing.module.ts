import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '', component : MyformComponent
  },
  {
    path: 'customer', component : CustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
