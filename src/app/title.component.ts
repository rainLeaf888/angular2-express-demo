import {Component, Input} from "@angular/core";
import UserService from "./user.service";


@Component({
	moduleId: module.id +'',
	selector: 'app-title',
	templateUrl: 'title.component.html'
})
export default class TitleComponent {
	
	constructor(user: UserService) {
		this.userName = user.userName;
		this.sex = user.sex;
	}
	@Input() subtitle = "";
	title: string = "Angular module";
	userName: string = "";
	sex : string = "";
}