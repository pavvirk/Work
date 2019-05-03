import {Component} from '@angular/core';

@Component({
 selector:'IfElse',
 templateUrl:`./IfElse.html`   
})
export class IfElseComponent{

    isValid:boolean=true;
    age:number=31;
    
    changeValue(valid:boolean){
        this.isValid=valid;
    }
 }