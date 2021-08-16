import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[higelight]'
})
export class HigelightDirective {

  @Input('higelight') higelightColor: any;
  constructor(private eleRef: ElementRef) {
    // this.eleRef.nativeElement.style.color = 'red';
  }
  @HostListener('mouseenter') mouseEnter() {
    this.eleRef.nativeElement.style.color = this.higelightColor;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.eleRef.nativeElement.style.color = 'black';
  }

}
