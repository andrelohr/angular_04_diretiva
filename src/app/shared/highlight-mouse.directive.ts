import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: any;
  /*@HostBinding('style.backgroundColor') get setColor() {
    // Código extra;
    return this.backgroundColor;
  }
  private backgroundColor: any;*/

  @HostListener('mouseenter') onMouseOver() {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'white'
    );*/
    this.backgroundColor = 'white';
  }

  constructor(
    //private elementRef: ElementRef,
    //private renderer: Renderer2
    ) { }

}
