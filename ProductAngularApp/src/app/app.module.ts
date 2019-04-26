import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './home/WelcomeComponent';
import { AppComponent }  from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { ProductModule } from './products/product.module';

const appRoutes: Routes =[ 
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
   
   ];
   
@NgModule({
  imports:      [ BrowserModule,ProductModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,WelcomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
