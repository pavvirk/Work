import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from "../api.service";
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  products: Product[];
  selectedProduct: Product = { id: null, name: null, price: null };
  @Input() resultID: number = null;
  @Input() resultName: string = null;
  @Input() resultPrice: number = null;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    // Calling the getProduct method of ApiService to get all products
    // this.apiService.getProduct().subscribe((products: Product[]) => {
    //   this.products = products;
    //   console.log(this.products);
    // })
    this.getData();
  }

  // Calling the getProduct method of ApiService to get all products
  getData() {
    this.apiService.getProduct().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    });
  }

  // Correct
  // addOrUpdateProduct(form) {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === this.selectedProduct.id) {
  //       console.log("update block executed");
  //       this.apiService.updateProduct(form.value).subscribe(() => {
  //         console.log("Product updated");
  //       });
  //     } else {
  //       console.log("typeof (this.products[i].id) = " + this.products[i].id + " is of type " + typeof (this.products[i].id));
  //       console.log("typeof (this.selectedProduct.id) = " + this.selectedProduct.id + " is of type " + typeof (this.selectedProduct.id));
  //       console.log("added block executed");
  //       this.apiService.addProduct(form.value).subscribe((product: Product) => {
  //         console.log("Product added", product);
  //       });
  //     }
  //   }
  // }

  // Add product
  //form.value.id != null && 
  addProduct(form) {
    if (form.value.name != null && form.value.price != null) {
      this.apiService.addProduct(form.value).subscribe((product: Product) => {
        console.log("Product added", product);
        form.reset();
        // this.router.navigateByUrl('/dashboard');
        // this.router.navigate(['/dashboard']);
        // window.location.reload();
      });
    }
    //working
    /* this.apiService.addProduct(form.value).subscribe((product: Product) => {
      console.log("Product added", product);
      form.reset();
      // this.router.navigateByUrl('/dashboard');
      // this.router.navigate(['/dashboard']);
      // window.location.reload();
    }); */
  }

  // Update product
  updateProduct(form) {
    if (this.selectedProduct && this.selectedProduct.id) {
      //form.value.id = this.selectedProduct.id;
      this.apiService.updateProduct(form.value).subscribe(() => {
        console.log("Product updated");
        form.reset();
      });
    }
  }

  // Selected product 
  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  // Delete product
  deleteProduct(id) {
    if (confirm("Are your sure?")) {
      this.apiService.deleteProduct(id).subscribe(() => {
        console.log("Product deleted");
        this.getData();

      });
    }
  }
}
