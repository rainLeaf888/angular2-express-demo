import {Component, OnInit} from "@angular/core";
import {HeroesService, Heroes} from "./heroes.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes-list',
  template: `
    <ul>
      <li *ngFor="let hero of heroList | async" (click)="onSelect(hero)" [class.selected]="isSelected(this.hero)">
        <span>{{hero.id}}：{{hero.name}}</span>
      </li>
    </ul>
  `,
  styles:['.selected{background: gray;}']
  //采用a标签式跳转：<a routerLink="{{hero.id}}">{{hero.id}}：{{hero.name}}</a>
})

export default class HeroesListComponent implements OnInit{
  heroList: Heroes[];
  private selectedId: number;
  constructor(private heroesService: HeroesService, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(){
    this.heroesService.getHeroes().then(data=>{
      this.heroList = data;
    })
  }

  /* heroList: Observable<Heroes[]>;

   ngOnInit() {
     this.heroList = this.route.params.switchMap((value: Params, index: number)=>{
       this.selectedId = +value["id"];
       return this.heroesService.getHeroesList();
     })

     this.heroesService.getHeroes().then((data)=>{
       this.heroList = data;
     })
   }*/
   onSelect(hero: Heroes) {
     this.router.navigate(['/heroes', hero.id]);
   }

   isSelected(hero: Heroes){
     return hero.id == this.selectedId;
   }
}