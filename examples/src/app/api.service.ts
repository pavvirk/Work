import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from "./customer";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseUrl = "http://localhost:5555/customer";


  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Customer[]> {
     return this.httpClient.get<Customer[]>(this.baseUrl);
  }

}
