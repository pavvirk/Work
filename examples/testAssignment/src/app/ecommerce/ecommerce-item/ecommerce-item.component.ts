import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce-item',
  templateUrl: './ecommerce-item.component.html',
  styleUrls: ['./ecommerce-item.component.css']
})
export class EcommerceItemComponent implements OnInit {


  public name: string;
  public price: number;
 public favorite: boolean; 
 public count: number;

  constructor() { }

  ngOnInit() {
    this.name = 'Test'; 
     this.price = 85;  
    this.favorite = false; 

  }


  toggleFavorite() { 
   console.log('Added to cart');   
   this.count++;
   this.favorite = !this.favorite; 
      }

}
