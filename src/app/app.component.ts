import {Component} from "@angular/core";
import 'zone.js';
import 'reflect-metadata';

@Component({
	selector: 'my-app',
	template: `
		<app-title [subtitle]="subtitle"></app-title>
		<nav>
			<a routerLink="contact" routerLinkActive="active">Contact</a>
			<a routerLink="heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="crisis-center" routerLinkActive="active">Crisis Center</a>
		</nav>
		<router-outlet></router-outlet>
	`
})

export default class AppComponent {
}