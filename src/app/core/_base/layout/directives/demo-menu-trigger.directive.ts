import { Overlay } from '@angular/cdk/overlay';
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ktDemoMenuTrigger]'
})
export class DemoMenuTriggerDirective implements OnInit {

  @Input() appDemoMenuTrigger?: any;

  constructor(
    private el: ElementRef,
    private overlay: Overlay,
  ) {

  }
  ngOnInit(): void {
    console.log(this.appDemoMenuTrigger);
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent): void {
    console.log(event);
  }

}
