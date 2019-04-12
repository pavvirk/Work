import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product = { id: null, name: null, price: null };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  addNewProduct(form) {
      this.apiService.addProduct(form.value).subscribe((product: Product) => {
        console.log("Product added", product);
        form.reset();
        this.router.navigateByUrl('/dashboard');
        // this.router.navigate(['/dashboard']);
        // window.location.reload();
      });
    
  }

}
