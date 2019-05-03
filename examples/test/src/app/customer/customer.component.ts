import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../shared/myservice.service';
// import { OrderbyPipe } from '../orderby.pipe';
import { from } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  myProducts: any[] = [];
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.myservice.getMyProduct().subscribe(res => {
      this.myProducts = res;
      console.log(this.myProducts);
      this.getCustomer();
    });
  }
  getCustomer() {
    this.myservice.getMyProduct().subscribe(res => {
      this.myProducts = res;
      console.log(this.myProducts);
    });
  }
}
