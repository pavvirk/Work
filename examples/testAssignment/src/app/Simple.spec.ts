import {async,ComponentFixture,TestBed} from '@angular/core/testing';
import {Simple} from './Simple';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core'

describe('Simple',()=>{
   let component:Simple;
   let fixture:ComponentFixture<Simple>;
   
   beforeEach(async(()=>{
       TestBed.configureTestingModule({
           declarations:[Simple]
       })
       .compileComponents();
   }));

   beforeEach(()=>{
       fixture=TestBed.createComponent(Simple);
       component=fixture.componentInstance;
       fixture.detectChanges();
   });
   it('should create',()=>{
       expect(component).toBeTruthy();
   });
   it('should have as subject `world` ',async(()=>{
       fixture=TestBed.createComponent(Simple);
       component=fixture.debugElement.componentInstance;
       expect(component.subject).toEqual('world');
   }));
   it('should have a h1 tag of `Hello world!`',()=>{
       const titleE1=fixture.debugElement.query(By.css('h1'));
       expect(titleE1.nativeElement.innerText).toBe('Hello world!');
   });
});