import {Injectable} from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ServiceClass{  
  
  constructor(private http:HttpClient){
   console.log('show'); }
  getData(){
    return this.http.get('http://bg4ws0977/ETGDocketApp/api/ETG');
    //return this.http.get('http://bg4ws0977/ETGDocket/api/ETG');
    //return this.http.get('https://jsonplaceholder.typicode.com/users');
  }  
}