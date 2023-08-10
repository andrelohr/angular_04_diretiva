import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
    /*Embora funcione o uso do ElementRef pode deixar o código vulnerável!!*/
    //console.log(this.elementRef);
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    
    // Renderer2, neste caso, renderiza o yellow como background-color
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
   }

}
