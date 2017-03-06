import {Component, OnInit, HostBinding, trigger, transition, animate, style, state } from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Heroes, HeroesService} from "./heroes.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h3>Heroes Detail</h3>
      <div>Id：{{hero.id}}</div>
      <div>Name：<input type="text" [(ngModel)]="hero.name"/></div>
      <div>Skill：<input type="text" [(ngModel)]="hero.skill"/></div>
      <div>
        <p><a routerLink="../">Hero List</a></p>
        <p><button type="button" (click)="backList()">返回</button></p>
       </div>
    </div>
  `,
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export default class HeroesDetailComponent implements OnInit {
  hero: Heroes;
  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router){
  }

  @HostBinding('@routeAnimation')
  get routeAnimation() {
    return true;
  }

  @HostBinding('style.display')
  get display() {
    return 'block';
  }

  @HostBinding('style.position')
  get position() {
    return 'absolute';
  }

  ngOnInit() {
    this.route.params.switchMap((param: Params, index: number)=>{
      return this.heroesService.getHeroesById(+param['id']);
    }).subscribe((hero: Heroes)=>{
      this.hero = hero;
    });
    /*
      获取此router中的参数 (仅获取初始参数，不适合变化)
      let id = parseInt(this.route.snapshot.params['id'], 10); <a routerLink="">
      this.heroesService.getHeroesById(id).then((data)=>{
        this.hero = data;
      });
    */
  }

  backList() {
    let id = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', {id: id, foo: 'foo'}]);

    //this.router.navigate(['../', {id: id, foo: 'foo'}], {relativeTo: this.route}) // 相对路径返回
  }
}