import { Component } from '@angular/core';

@Component({
  selector: 'array-example',
  templateUrl: `./arrayComponent.html`
})
export class ArrayExampleComponent {
  people: any[] = ['a','b','c','d'];
}
