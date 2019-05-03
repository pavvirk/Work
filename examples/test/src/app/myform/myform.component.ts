import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    formdata: any[] = [];
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required, Validators.minLength(3)],
            lastName: ['', Validators.required],
            city: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log('form data1', this.registerForm.value);

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
        const formdata = this.registerForm.value;
        console.log('form data', this.registerForm.value);
    }

}
