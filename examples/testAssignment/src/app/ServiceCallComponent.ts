import {Component} from '@angular/core';
import {ProviderInExample} from './ProviderInExample';
import{ServiceExample} from './ServiceExample';
@Component({
    selector:'servicecall',
    template:`<h1>{{simple}}</h1>
    <h1>{{show}}</h1>`,
    providers:[ServiceExample]
})
export class servicecallComponent{
    simple:string;
    show:any;
    constructor(simple:ProviderInExample ,one:ServiceExample)
    {
        this.show=simple.getDate();
    this.simple=one.getString();
    }
}