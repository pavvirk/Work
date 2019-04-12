import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee = { id: null, first_name: null, last_name: null,city:null };

  @Input() resultID: number = null;
  @Input() resultFirstName: string = null;
  @Input() resultLastName: string = null;
  @Input() resultCity: string = null;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
   
    this.getData();
  }

  // Calling the getEmployee method of ApiService to get all employees
  getData() {
    this.apiService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
      console.log(this.employees);
    });
  }

  addEmployee(form) {
    if (form.value.first_name != null && form.value.last_name != null &&  form.value.city != null) {
      this.apiService.addEmployee(form.value).subscribe((Employee: Employee) => {
        console.log("Employee added", Employee);
        form.reset();
      });
    }
   
  }

  // Update Employee
  updateEmployee(form) {
    if (this.selectedEmployee && this.selectedEmployee.id) {
      //form.value.id = this.selectedEmployee.id;
      this.apiService.updateEmployee(form.value).subscribe(() => {
        console.log("Employee updated Sucessfully");
        form.reset();
      });
    }
  }

  // Selected Employee 
  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  // Delete Employee
  deleteEmployee(id) {
    if (confirm("Are you sure?")) {
      this.apiService.deleteEmployee(id).subscribe(() => {
        console.log("Employee deleted suceessfully!"+id);
        this.getData();
      });
    }
  }
}
