import { Directive, ElementRef, HostBinding, HostListener, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  //open  = false;
  @HostBinding('class.open') open = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event']) clickOut(event) {
    if(!this.elementRef.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    /*if (this.open) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }

    else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }*/

    this.open = !this.open;
  }

}