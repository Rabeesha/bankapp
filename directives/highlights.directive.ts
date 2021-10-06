import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'// use this selector where you want to appy the style
})
export class HighlightsDirective {

  constructor(private el:ElementRef) { // elmntref used to fetch html tags from dom
    el.nativeElement.style.color="red"
  }
}
