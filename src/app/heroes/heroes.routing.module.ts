import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import HeroesListComponent from "./heroes-list.component";
import HeroesDetailComponent from "./heroes-detail.component";

const heroesRoutes : Routes = [{
    path: '', component: HeroesListComponent
  }, {
    path: 'heroes/:id', component: HeroesDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})

export default class HeroesRoutingModule {
}