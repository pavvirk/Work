import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Product2Component } from '../product2/Product2.Component';



@Component({
  selector: 'app-welcome-login',
  templateUrl: './welcome-login.component.html',
  styleUrls: ['./welcome-login.component.css']
})
export class WelcomeLoginComponent implements OnInit {
  // public router: Router
  constructor(private router: Router) {}
  public title = "Welcome";
  Username:any;
  formdata:any;
  passwd:any;
  ngOnInit() {
    this.formdata = new FormGroup({
      Username: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(3)])),
      password: new FormControl("")
      
   });
  //  this.title ="ecommerce"
   console.log(this.formdata)
  }
  onClickSubmit(formdata){
     console.log(formdata)
    
    if(formdata.Username === 'admin' && formdata.password === 'admin' ){
      alert('success');
      this.router.navigate(['add-prod']);
  }
}
}