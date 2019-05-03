import {Component,OnInit} from '@angular/core';
@Component({
    selector:'app-simple',
    templateUrl:'./simple.html'
})
export class Simple implements OnInit{
    subject:string="world";
    constructor(){}
    ngOnInit() {}
}