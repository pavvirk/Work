import {Component} from '@angular/core';
import {ServiceClass}from './ServiceClass';

@Component({
  selector:'just',
  template:`<h1>Show data</h1>
             <div>
			   <input type="text" placeholder="Search the name" [(ngModel)]=name /><br>			 
			 </div>
             <div>
			 <ul *ngFor="let student of stud">
			   <li> 
			      {{student.first_name}}
			   </li>
			 </ul>			 
			</div>
           `
})
export class SimpleClass{
    stud:any;
	constructor(private simpleOne:ServiceClass){
      this.simpleOne.getData().subscribe(data=>{
	     this.stud = data;
	  });
   }
   
}
interface Student{
  FirstName:string;
}