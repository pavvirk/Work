import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { ArrayExampleComponent } from './arraycomponent'; 
import { BackgroundExampleComponent } from './BackgroundExample'; 
import { CredentialExampleComponent } from './CredentialExample'; 
import { EmployeeDetailsExampleComponent } from './EmployeeDetails'; 

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AppComponent,ArrayExampleComponent,BackgroundExampleComponent,CredentialExampleComponent,EmployeeDetailsExampleComponent ],
  imports: [ BrowserModule,FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
