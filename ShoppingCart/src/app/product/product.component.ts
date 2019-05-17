import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import{ URLComponent } from '../URLComponent';
import { Observable } from 'rxjs';
import { MyserviceService } from '../myservice.service'
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ProductComponent implements OnInit {

  constructor(private http:Http, private _myService: MyserviceService){ }
  public name:string;
  public productname:string;
  public price:number;
  public quantity_num:number;
  public deal:boolean;
  public date:Date
  public day_week:number;
  public disabled_buttons_inc:boolean
  public disabled_buttons_dec:boolean
  public add_to_cart:boolean
  product: any[];
  products1: any[] = [];
  

  getProductData(){
      return this.http.get('http://localhost:3000/products').subscribe(
        (res:Response)=>{ 
          this.product = res.json(); 
          console.log(this.product)
        } 
      )
  }

  ngOnInit() {
    this._myService.getMyProduct()
  // .subscribe((res:Response) => {
  // // this.products1 = res.json();
  // // console.log('Products 1 ', this.products1)
  // // });
    this.name = "Qualcom Snapdragpon"
    this.quantity_num = 1
    this.date = new Date();
    this.day_week = this.date.getDay()
    this.deal = this.date.getDay() == 2 //Checking deals for every tuesday
    this.price = 20000
    if(this.deal == true){
      this.price = 10000
    }
    this.disabled_buttons_inc = false
    this.disabled_buttons_dec = false
    this.add_to_cart = false
    this.getProductData()
  }



  
 

  onClickMeDec(){
      this.disabled_buttons_inc = false
        this.add_to_cart = false
        this.quantity_num--;
      if(this.quantity_num < 1) 
        {
          this.disabled_buttons_dec = true
          this.add_to_cart = true
        } 
  }

  onClickMeIncr(){
    console.log(this.product)
        this.quantity_num++;
        this.disabled_buttons_dec = false
        this.add_to_cart = false
    if(this.quantity_num >= 10)  
      {
       this.disabled_buttons_inc = true
      }
  }


}
