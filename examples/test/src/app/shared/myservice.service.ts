import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
// baseURL: 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpclient: HttpClient) { }
getMyProduct(): Observable<any> {
 return this.httpclient.get<any>('assets/Data/customers');
}
}
