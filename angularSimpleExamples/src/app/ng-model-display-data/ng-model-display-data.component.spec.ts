import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelDisplayDataComponent } from './ng-model-display-data.component';

describe('NgModelDisplayDataComponent', () => {
  let component: NgModelDisplayDataComponent;
  let fixture: ComponentFixture<NgModelDisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelDisplayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
