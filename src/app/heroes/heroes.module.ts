import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {HeroesService} from "./heroes.service";
import HeroesRoutingModule from "./heroes.routing.module";
import HeroesListComponent from "./heroes-list.component";
import HeroesDetailComponent from "./heroes-detail.component";


@NgModule({
  imports: [FormsModule, CommonModule, HeroesRoutingModule],
  declarations: [HeroesListComponent, HeroesDetailComponent],
  providers: [HeroesService]
})

export default class HeroesModule{
}