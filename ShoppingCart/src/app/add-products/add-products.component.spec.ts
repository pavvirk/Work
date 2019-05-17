import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Product2Component } from '../product2/Product2.Component';
import { WelcomeLoginComponent } from '../welcome-login/welcome-login.component';
import { AddProductsComponent } from '../add-products/add-products.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddProductsComponent', () => {
  let component: AddProductsComponent;
  let fixture: ComponentFixture<AddProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ AddProductsComponent,
        WelcomeLoginComponent,Product2Component
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
