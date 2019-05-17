import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  constructor() { }
  public name:string;
  public price:number;
  public quantity_num:number;
  public deal:boolean;
  public date:Date
  public day_week:number;
  public disabled_buttons_inc:boolean
  public disabled_buttons_dec:boolean
  public add_to_cart:boolean

  ngOnInit() {
    this.name = "Qualcom Snapdragpon"
    this.quantity_num = 1
    this.date = new Date();
    this.day_week = this.date.getDay()
    this.deal = this.date.getDay() == 3 //Checking deals for every Wednesday
    this.price = 60000
    if(this.deal == true){
      this.price = 20000
    }
    this.disabled_buttons_inc = false
    this.disabled_buttons_dec = false
    this.add_to_cart = false
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
        this.quantity_num++;
        this.disabled_buttons_dec = false
        this.add_to_cart = false
    if(this.quantity_num >= 10)  
      {
       this.disabled_buttons_inc = true
      }
  }

}
