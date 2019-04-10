import {Component} from '@angular/core';

@Component({
 selector:'pipe',
 templateUrl:'./pipe.html'
   
})
export class pipe{
    name="shy";
    day =new Date();
    arr=[10,12,23];
    price=100;
}