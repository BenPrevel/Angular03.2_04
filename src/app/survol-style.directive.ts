import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSurvolStyle]'
})
export class SurvolStyleDirective {


  @HostBinding('class.style') newStyle : boolean | undefined;

 
  constructor() {}


@HostListener('mouseenter') mouseEnterEvent (eventData:Event){
  this.newStyle= true;
}
@HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
  this.newStyle= false;
}
}
