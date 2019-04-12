import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Product } from '../product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  idnew: number;
  products: Product[];
  selectedProduct: Product = { id: null, name: null, price: null };

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }
  // id: number;
  data: any = {};
  student: any = [];
  studentObj: object = {};


  ngOnInit() {
    // Getting the id value from the url string
    this.route.params.subscribe(params => {
      this.idnew = params['id'];
      console.log(this.idnew);
    })

    // Getting the selected product details
    this.httpClient.get(this.apiService.baseUrl + "/" + this.idnew).subscribe((res) => {
      console.log(res);
      this.student = res;
      // console.log(this.student);
      // console.log(this.student.length);
      // for (var i = 0; i < this.student.length; i++) {
      //   console.log(typeof (this.student[i].id));
      //   console.log(typeof (this.idnew));
      //   if (parseInt(this.student[i].id) === this.idnew) {
      //     this.data = this.student[i];
      //     console.log(this.student[i]);
      //     break;
      //   }
      // }
    });
  }

  updateProduct(form) {
    //form.value.id = this.selectedProduct.id;
    //form.value.name = this.selectedProduct.name;
    //form.value.price = this.selectedProduct.price;
    console.log(form.value);

    this.apiService.updateProduct(form.value).subscribe(() => {
      console.log("Product updated");
      form.reset();
      this.router.navigateByUrl('/dashboard');
    });
  }

}
