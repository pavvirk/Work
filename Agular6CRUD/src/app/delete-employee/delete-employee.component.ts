import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  ngOnInit() {
  }
  employees: Employee[];
  selectedEmployee: Employee = { id: null, first_name: null, last_name: null,city:null };

  constructor(private apiService: ApiService, private router: Router) { }

  // Delete Employee by id
  deleteEmployee(id) {
    console.log(id);
    this.apiService.deleteEmployee(id).subscribe(() => {
      console.log("Employee deleted"+id);
      this.router.navigateByUrl('/home');
    });
  
  }

}
