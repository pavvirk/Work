import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBGColorComponent } from './change-bgcolor.component';

describe('ChangeBGColorComponent', () => {
  let component: ChangeBGColorComponent;
  let fixture: ComponentFixture<ChangeBGColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBGColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBGColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
