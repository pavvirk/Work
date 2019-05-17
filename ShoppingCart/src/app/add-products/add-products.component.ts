import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(public router: Router, public http:Http) { }

  productname:any;
  productdesc:any;
  productprice:number;
  // prodimg:any;
  productimg:any;
  formdata:object=[];

  ngOnInit() {
    this.formdata = new FormGroup({
      // prodname: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(3)])),
      productname: new FormControl(""),
      productimg: new FormControl(""),
      productprice: new FormControl(""),
      productdesc: new FormControl(""),
      
      // prodimg: new FormControl(""),
      
      
   });
   
  }
 
  
//   addBookWithObservable(book:formdata): Observable<formdata> {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(this.url, book, options)
//                .map(this.extractData)
//                .catch(this.handleErrorObservable);
// } 

  onClickSubmit(formdata:any){
    // alert(1)
    console.log(JSON.stringify(formdata))
    // this.studentObj={
    //   "first_name":student.name,
    //   "score":student.score,
    //   "Skill":student.skill,
    //   "comment":student.comments
    // }
    // return false
    
    this.http.post('http://localhost:3000/products/',formdata).subscribe((res:Response)=>{ console.log(res); })
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // this.http.post('http://localhost:3000/products',JSON.stringify(formdata),{ headers: headers }).subscribe(console.info(JSON.stringify(t)))
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.hhtpclient.post('http://localhost:3000/products', formdata, options)subscribe(
  //     (t: T) => console.info(JSON.stringify(t))
  // );
    
}
}
