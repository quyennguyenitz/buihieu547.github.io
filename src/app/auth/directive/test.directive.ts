import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[testDirective]'
})
export class TestDirective {
  constructor(private el: ElementRef) {
    
  }
}