import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product = { id: null, name: null, price: null };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  // Delete product
  deleteNewProduct(id) {
    console.log(id);
    // if (confirm("Are your sure?")) {
    this.apiService.deleteProduct(id).subscribe(() => {
      console.log("Product deleted");
      this.router.navigateByUrl('/dashboard');
    });
    // }
  }

}
