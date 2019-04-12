import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  idnew: number;
  employees: Employee[];
  selectedEmployee: Employee = { id: null, first_name: null, last_name: null,city:null };

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  data: any = {};
  student: any = [];
  studentObj: object = {};

  ngOnInit() {
    // Getting the id value from the url string
    this.route.params.subscribe(params => {
      this.idnew = params['id'];
      console.log(this.idnew);
    })

    // Getting the selected employee details
    this.httpClient.get(this.apiService.baseUrl + "/" + this.idnew).subscribe((res) => {
      console.log(res);
      this.student = res;
    });
  }

  updateEmployee(form) {
    console.log(form.value);
    this.apiService.updateEmployee(form.value).subscribe(() => {
      console.log("Employee updated Successfully");
      form.reset();
      this.router.navigateByUrl('/home');
    });
  }

}
