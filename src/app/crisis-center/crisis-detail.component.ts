import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";


import {CrisisCenter, CrisisCenterService} from "./crisis-center.service";

@Component({
  selector: '',
  template: `
    <div>
      <label>Id：</label><span>{{crisisCenter.id}}</span>
    </div>
    <div>
      <label>Name：</label>
      <span>
        <input type="text" name="crisisName" [(ngModel)]="crisisCenter.name"/>
      </span>
      <p>----{{crisisCenter.name}}</p>
    </div>
    <div><a [routerLink]="[crisisCenter.id]">返回</a></div>
  `,
})

export default class CrisisDetailComponent implements OnInit{
  crisisCenter: CrisisCenter;

  constructor(private service: CrisisCenterService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.switchMap((param: Params, index: number)=>{
      return this.service.getCrisisById(+param['id']);
    }).subscribe((data: CrisisCenter)=>{
      this.crisisCenter = data;
    })
  }


}
