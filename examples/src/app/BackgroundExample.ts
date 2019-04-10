import { Component } from '@angular/core';

@Component({
  selector: 'background-example',
  templateUrl: `./BackgroundExample.html`
})
export class BackgroundExampleComponent {
    changeColor(color) {
     document.body.style.background = color;
    }
}
