import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: Http) { }
  products1: any[] = [];
  getMyProduct(){
    return this._http.get('http://localhost:3000/products').subscribe(
      (res:Response) => {
      this.products1 = res.json();
      console.log('Products 1 ', this.products1)
      });
  }
}
