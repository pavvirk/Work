import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee = { id: null, first_name: null, last_name: null,city:null };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  addEmployee(form) {
    this.apiService.addEmployee(form.value).subscribe((employee: Employee) => {
      console.log("Employee added Suceessfully", employee);
      form.reset();
      this.router.navigateByUrl('/home');
    });
  
}

}
