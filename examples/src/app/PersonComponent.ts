import {Component} from '@angular/core';

@Component({
 selector:'person',
 templateUrl:'./person.html'
   
})
export class PersonComponent{
    people:any[]=[
        {
            "name":"Roja",
            "age":45
        },
        {
            "name":"Mary",
            "age":30
        },
        {
            "name":"Sheela",
            "age":56
        }
    ];
 }