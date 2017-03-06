import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
//import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import AppComponent from "./app.component";
import HighlightDirective from "./highlight.directive";
import TitleComponent from "./title.component";
import UserService from "./user.service";
import ContactModule from "./contact/contact.module";
import {AppRoutingModule} from "./app.routing.module";
import HeroesModule from "./heroes/heroes.module";
import CrisisCenterModule from "./crisis-center/crisis-center.module";
import AdminModule from "./admin/admin.module";


@NgModule({
	"imports": [
		BrowserModule,
		HttpModule,
		JsonpModule,
		ContactModule,
		AppRoutingModule,
		HeroesModule,
		CrisisCenterModule,
		AdminModule
	],
	"declarations": [
			AppComponent,
			HighlightDirective,
			TitleComponent,
		],
	"bootstrap": [AppComponent],
	"providers": [
		UserService
	]
})
export default class AppModule{}