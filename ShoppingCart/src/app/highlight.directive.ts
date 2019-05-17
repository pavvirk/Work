import { Directive,ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
 
}

@Directive({ selector: '[appShadow]' })
export class AppShadow {
    constructor(elem: ElementRef, renderer: Renderer2) {
       renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    }
}