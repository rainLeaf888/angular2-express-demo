import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import CrisisCenterComponent from "./crisis-center/crisis-center.component";
import HeroesListComponent from "./heroes/heroes-list.component";
import CrisisCenterModule from "./crisis-center/crisis-center.module";


const routes : Routes = [
	{path: '', redirectTo: 'contact', pathMatch: 'full'},
  {path: 'crisis-center', component: CrisisCenterComponent},
  /*{
    path: 'crisis-center',
    component: CrisisCenterComponent,
    //loadChildren: 'CrisisCenterModule',
    loadChildren: 'app/crisis-center/crisis-center.module.ts#CrisisCenterModule',
  },*/
  {path: 'heroes', component: HeroesListComponent}, //loadChildren: 'app/hero/hero.module#HeroModule'
  //{path: '**', component: 404Component} // 任何路由中的路径都不匹配，即匹配这个
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{
}