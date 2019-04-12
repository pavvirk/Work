import {Component, OnInit}from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {URLComponent} from './URLComponent';

@Component({
    selector:'my-stud',
    templateUrl:'ShowData.html'
})

export class HomeComponentETG implements OnInit{
   constructor(private http:Http){}
   id:number;

   private headers= new Headers({'Content-Type':'application/json'});

   deleteStudent(id){
       if(confirm("Are you sure?")){           
          return this.http.delete(URLComponent.BASE_URL + "/"+id ,{headers:this.headers}).toPromise()
          .then(()=>{
              this.fetchData();
          })
       }
   }

  student=[];

    fetchData(){
      this.http.get(URLComponent.BASE_URL).subscribe(
          (res:Response)=>{this.student=res.json();}
      )      
    }

    ngOnInit(){
        this.fetchData();
    }

}