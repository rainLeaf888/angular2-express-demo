import {Injectable} from "@angular/core";
import {Http, Response}  from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

import CommonTool from "../common/Common-tool";


export class Heroes{
  constructor(public id: number, public name: string, public skill: number) {
  }
}

const HEROES_LIST: Heroes[] = [
  new Heroes(1, '擎天柱', 90),
  new Heroes(2, '神龟', 70),
  new Heroes(3, '大黄蜂', 80)
];

let heroesPromise = Promise.resolve(HEROES_LIST);

@Injectable()
export class HeroesService{
  constructor(private http: Http){

  }
  private heroesUrl: string = "api/heroes/list";

  getHeroesList() {
    return heroesPromise;
  }

  getHeroesById(id: number | string) {
    return heroesPromise.then((data: Heroes[])=>
      data.find(u=> u.id === +id) // Hero类里面的属性必须为public ，否则访问不到
    )
  }

  getHeroes(): Promise<Heroes[]>{ // subscribe 返回的对象主要为了取消订阅，故需要转换为Promise对象，可以多次操作
    return this.http.get(this.heroesUrl)
    .toPromise().then(CommonTool.extractData).catch(CommonTool.handleError);
  }
}