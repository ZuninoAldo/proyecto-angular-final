import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitles]',
  standalone: false
})
export class TitlesDirective {

  constructor(private element: ElementRef<HTMLElement>) {

    this.applyStyle();

  }

  applyStyle(): void {

    this.element.nativeElement.style.fontSize = '20px'

  }

}
