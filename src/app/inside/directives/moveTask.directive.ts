import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[moveTask]'
})
export class MoveTaskDirective {
    constructor(private el: ElementRef) {}

    @HostListener('mousedown') onMouseEnter() {
        
    }

    @HostListener('mouseup') onMouseLeave() {
        
    }
}