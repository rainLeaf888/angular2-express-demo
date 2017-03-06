import {Directive, Renderer, ElementRef,HostListener} from "@angular/core";
@Directive({
	selector: '[highlight]'
})

export default class HighlightDirective{

	constructor(public render: Renderer, public elment : ElementRef) {
    this.setHighlight('green');

	}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.setHighlight('yellow');
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.setHighlight('green');
  }

  setHighlight(color) {
    this.render.setElementStyle(this.elment.nativeElement, 'backgroundColor', color);
  }
}