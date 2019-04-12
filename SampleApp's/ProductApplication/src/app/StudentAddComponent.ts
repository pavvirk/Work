import {Component,OnInit} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import{URLComponent} from './URLComponent';

@Component({
  selector:'myStudent',
  templateUrl:'student.html'
})

export class StudentAddComponent implements OnInit{
  
  skillNames: string[]=["Data Structures","Testing","OOP","RDBMS","Software Eng","WebTechnologies","XML"]
  
  studentObj:object=[];
  student=[];
  constructor(private http:Http){ }

  getData(){
    this.http.get(URLComponent.BASE_URL).subscribe(
          (res:Response)=>{this.student=res.json();}
      )
  }
  addNewStudent(student){
    this.studentObj={
      "first_name":student.name,
      "score":student.score,
      "Skill":student.skill,
      "comment":student.comments
    }
    this.http.post(URLComponent.BASE_URL,this.studentObj).subscribe((res:Response)=>{
      console.log(res);
    })
  }
  ngOnInit(){     
    this.getData();
   }
}