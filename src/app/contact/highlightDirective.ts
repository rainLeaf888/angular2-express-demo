import {Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
	selector: '[highlight], input'
})
export class HighlightDirective {
	constructor(render: Renderer, el : ElementRef){
		render.setElementStyle(el.nativeElement, 'color', 'red');
		console.log(`*content :${el.nativeElement.tagName}`);
	}
	
}
