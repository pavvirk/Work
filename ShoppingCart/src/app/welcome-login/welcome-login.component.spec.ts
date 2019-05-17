import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeLoginComponent } from './welcome-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
// import { WelcomeLoginComponent } from './welcome-login.component'
import { Product2Component } from '../product2/product2.component'
import { from } from 'rxjs';

describe('WelcomeLoginComponent', () => {
  let component: WelcomeLoginComponent;
  let fixture: ComponentFixture<WelcomeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,RouterModule,AppRoutingModule
      ],
      declarations: [ WelcomeLoginComponent,Product2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it(`should have as title 'Welcome'`, () => {
    const fixture = TestBed.createComponent(WelcomeLoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome');
  });
});
