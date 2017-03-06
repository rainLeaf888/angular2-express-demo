import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import CrisisRoutingModule from "./crisis.routing.module";
import CrisisCenterHomeComponent  from "./crisis-center-home.component";
import CrisisCenterComponent  from "./crisis-center.component";
import CrisisListComponent  from "./crisis-list.component";
import CrisisDetailComponent  from "./crisis-detail.component";

import {CrisisCenterService} from "./crisis-center.service";


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisCenterHomeComponent,
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent
  ],
  providers: [
    CrisisCenterService
  ]
})
export default class CrisisCenterModule {

}