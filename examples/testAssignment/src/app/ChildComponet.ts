import {Component} from '@angular/core';

@Component({
 selector:'child',

    template:`<h1>Avinash</h1>
    <IfElse></IfElse>
    <app-stock-item>
    </app-stock-item>
    <pipe></pipe>
    <servicecall></servicecall>
    <template-form></template-form><validate></validate><app-dashboard></app-dashboard>`   
})
export class ChildComponent{ }