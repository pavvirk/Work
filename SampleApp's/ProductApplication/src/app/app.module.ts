import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ServiceClass} from './ServiceClass';
import {SimpleClass} from './SimpleClass';
import {SimpleForm} from './SimpleForm';
import {HomeComponentETG} from './HomeComponentETG';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {StudentAddComponent} from './StudentAddComponent';
import {UpdateStudent} from './UpdateStudent';
import {WelcomeComponent} from './home/WelcomeComponent';
import {URLComponent} from './URLComponent';

const appRoute:Routes=[
   { path:'',component:WelcomeComponent},
   {path:'Student_Details',component:HomeComponentETG},
   {path:'student', component:StudentAddComponent},
   {path:'updateStudent/:id',component:UpdateStudent}

]
@NgModule({
  declarations: [ AppComponent,SimpleClass,SimpleForm,HomeComponentETG,StudentAddComponent,UpdateStudent,WelcomeComponent],
  imports: [ BrowserModule,HttpClientModule,HttpModule,FormsModule,RouterModule.forRoot(appRoute)],  
  providers : [ServiceClass,URLComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
