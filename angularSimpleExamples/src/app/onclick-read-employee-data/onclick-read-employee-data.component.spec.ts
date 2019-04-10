import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnclickReadEmployeeDataComponent } from './onclick-read-employee-data.component';

describe('OnclickReadEmployeeDataComponent', () => {
  let component: OnclickReadEmployeeDataComponent;
  let fixture: ComponentFixture<OnclickReadEmployeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnclickReadEmployeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnclickReadEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
