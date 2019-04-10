import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateArrayListComponentComponent } from './iterate-array-list-component.component';

describe('IterateArrayListComponentComponent', () => {
  let component: IterateArrayListComponentComponent;
  let fixture: ComponentFixture<IterateArrayListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterateArrayListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterateArrayListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
