import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProductComponent } from "./create-product/create-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { DeleteProductComponent } from "./delete-product/delete-product.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import {HomeComponent} from './home/home.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent}  from './update-employee/update-employee.component';
import{DeleteEmployeeComponent} from './delete-employee/delete-employee.component';

const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'createProduct', component: CreateProductComponent },
  // { path: 'updateProduct/:id', component: UpdateProductComponent },
  // { path: 'deleteProduct/:id', component: DeleteProductComponent },
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createEmployee', component: CreateEmployeeComponent },
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
  { path: 'deleteEmployee/:id', component: DeleteEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
