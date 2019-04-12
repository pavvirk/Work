import {Component,OnInit} from'@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {URLComponent} from './URLComponent';

@Component({
    selector:'update-student',
    templateUrl:'updateStudent.html'
})

export class UpdateStudent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute , private http:Http){}
  id:number;
  data:object={};
  student=[];
  studentObj:object={} ;
  
  private header=new Headers({'Content-Type':'application/json'});
  
  updateStudent(student){
      this.studentObj={
          "first_name" : student.name,
          "score" : student.score,
          "Skill" : student.skill,
          "comment": student.comments
      }
           
      this.http.put(URLComponent.BASE_URL + "/"+this.id,JSON.stringify(this.studentObj),{headers:this.header}).toPromise().then(()=>{
          console.log(this.studentObj);
          this.router.navigate(['/']);
      })
  }
  
  ngOnInit(){
      this.route.params.subscribe(params =>{
          this.id=+params['id'];
      });
      this.http.get(URLComponent.BASE_URL).subscribe((res:Response)=>{
          this.student = res.json();
          for(var i=0;i<this.student.length;i++){
              if(parseInt(this.student[i].id)===this.id){
                this.data=this.student[i];
                break;
              }
          }
      })
  }
  
}