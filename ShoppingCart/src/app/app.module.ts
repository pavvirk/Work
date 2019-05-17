import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
// import{ URLComponent } from './URLComponent';
import { HighlightDirective,AppShadow } from './highlight.directive';
import { FilterProdPipe } from './filter-prod.pipe';
import { Product2Component } from './product2/Product2.Component';
import { WelcomeLoginComponent } from './welcome-login/welcome-login.component';
import { AddProductsComponent } from './add-products/add-products.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product2Component,
    HighlightDirective,
    AppShadow, 
    FilterProdPipe, 
    WelcomeLoginComponent, AddProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){}
}
