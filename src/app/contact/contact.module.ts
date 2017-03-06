import {NgModule}  from "@angular/core";
import {CommonModule} from "@angular/common";
import { FormsModule }  from '@angular/forms';
import {HighlightDirective} from "./highlightDirective";
import ContactComponent from "./contact.component";
import {ContactService} from "./contact.service";
import AwesomePipe from "./awesome.pipe";
import {ContactRoutingModule} from "./contact.routing.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ContactRoutingModule
	],
	declarations: [
		ContactComponent,
		AwesomePipe,
		HighlightDirective
	],
	providers: [
		ContactService,
	]
})
export default class ContactModule{
}