import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[directiveAddClass]'
})
export class AddClassDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'

  constructor(private elRef : ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {

  }
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "red";

  @HostListener('mouseenter') mouseover(eventData : Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor

  }
  @HostListener('mouseleave') mouseleave(eventData : Event) {
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  this.backgroundColor = this.defaultColor

  }
}
