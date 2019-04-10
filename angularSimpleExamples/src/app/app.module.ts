import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IterateArrayListComponentComponent } from './iterate-array-list-component/iterate-array-list-component.component';
import { ChangeBGColorComponent } from './change-bgcolor/change-bgcolor.component';
import { NgModelDisplayDataComponent } from './ng-model-display-data/ng-model-display-data.component';
import { OnclickReadEmployeeDataComponent } from './onclick-read-employee-data/onclick-read-employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    IterateArrayListComponentComponent,
    ChangeBGColorComponent,
    NgModelDisplayDataComponent,
    OnclickReadEmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
