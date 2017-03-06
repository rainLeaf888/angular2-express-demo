import {Injectable} from "@angular/core";

export class Contact {
	constructor(public id: number, public name: string) {
	}
}
const CONTACTS : Contact[] = [
	new Contact(21, 'Tom'),
	new Contact(22, 'Lucy'),
	new Contact(23, 'Lisa')
];
const FETCH_LATENCY = 500;

@Injectable()
export class ContactService{
	getContacts(){
		return new Promise(resolve=>{
			setTimeout(()=>{
				resolve(CONTACTS);
			}, FETCH_LATENCY);
		})
	}
	getContact(id: number | string){
		return this.getContacts().then((user: Contact[])=>
			 user.find(u=> u.id === +id)
		);
	}
}

interface SearchFunc{
	[index: number]: string;
	length: number;
	name: string;
	myfun? : (arg1: string, arg2: number)=> string;
}
class Animals {

	name: string;
}
class Dog extends Animals {

	breed: string;
}

interface Temp{
	[x: number]: Dog;
	[x: string]: Animals;
}

