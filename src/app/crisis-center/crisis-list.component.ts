import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {CrisisCenterService, CrisisCenter} from "./crisis-center.service";

@Component({
  selector: 'app-crisis-center-list',
  template: `
    <h2></h2>
    <div>
      <ul>
        <li *ngFor="let c of crisisList" (click)="onSelectCrisis(c.id)">{{c.id}}--{{c.name}}</li>
      </ul>
    </div>
    <router-outlet></router-outlet>
  `
})

export default class CrisisListComponent implements OnInit{
  constructor(private crisisCenterService: CrisisCenterService, private router : Router, private route: ActivatedRoute){}
  crisisList: CrisisCenter[];

  ngOnInit(){
    this.crisisCenterService.getCrisisList().then((data: CrisisCenter[])=>{
      this.crisisList = data;
    });
  }

  onSelectCrisis(id : number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}