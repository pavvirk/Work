import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "./product";
import {Employee} from "./employee";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    //baseUrl = "http://localhost:3000/product";
    baseUrl="http://localhost:3000/employee";

  constructor(private httpClient: HttpClient) { }

  // Get all the products
  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  // Get all Employees
  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  // Create new product
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Create new employee
  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

   // Update employee by id
   updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


  // Update product by id
  updateProduct(product: Product): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${product.id}`, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Delete product by id
  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Delete employee by id
  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

}
