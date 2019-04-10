import { Component } from '@angular/core';

@Component({
  selector: 'EmployeeDetails-example',
  templateUrl: `./EmployeeDetails.html`
})
export class EmployeeDetailsExampleComponent {
    Employees: any[] = [
        {
          "name": "Douglas  Pace",
          "id": 14,
          "Salary":10000
        },
        {
          "name": "Mcleod  Mueller",
          "id": 22,
          "Salary":12000
        },
        {
          "name": "Day  Meyers",
          "id": 26,
          "Salary":16000
        },
        {
          "name": "Aguirre  Ellis",
          "id": 10,
          "Salary":10000
        },
        {
          "name": "Cook  Tyson",
          "id": 29,
          "Salary":25000
        }
      ];
}
