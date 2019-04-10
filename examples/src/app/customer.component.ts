import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import { Customer } from './customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './customer.component.html',
 
})

export class CaseStudyComponent implements OnInit {
    customer: Customer[];
  selectedProduct: Customer = { FirstName: null, LastName: null, City: null };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getProduct().subscribe((customer: Customer[]) => {
      this.customer = customer;
      console.log(this.customer);
    })
  }

  selectCustomer(customer: Customer) {
    this.selectedProduct = customer;
  }



}