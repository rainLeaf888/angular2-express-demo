import {Component, OnInit} from "@angular/core";
import {Contact, ContactService} from "./contact.service";
import UserService from "../user.service";

@Component({
	moduleId: module.id+'',
	selector: 'app-contact',
	//styleUrls: ['contact.component.css'],
	templateUrl: 'contact.component.html'
})

export default class ContactComponent implements OnInit {

	constructor(private contactService: ContactService, userService: UserService) {
		this.userName = userService.userName;
	}
	contact: Contact;
	contacts: Contact[];
	msg: string = "Loading msg";
	userName: string = "";

	ngOnInit(){
		this.contactService.getContacts().then((contacts: Contact[])=>{
			this.contacts = contacts;
			this.msg = "";
			this.contact = contacts[0];
		})
	}

	onSubmit() {
		this.displayMessage('Save' + this.contact.name)
	}

	next() {
		let xi = 1 + this.contacts.indexOf(this.contact);
		if (xi >= this.contacts.length) {
			xi = 0;
		}
		this.contact = this.contacts[xi];
	}

	newContact() {
		this.displayMessage("New Contact");
		this.contact = {id: 32, name: 'Atom'}
		this.contacts.push(this.contact);
	}

	displayMessage(msg: string) {
		this.msg = msg;
		setTimeout(()=>{
			this.msg = '';
		}, 1500)
	}
}