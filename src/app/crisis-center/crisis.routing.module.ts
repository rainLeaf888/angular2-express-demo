import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import CrisisCenterHomeComponent  from "./crisis-center-home.component";
import CrisisCenterComponent  from "./crisis-center.component";
import CrisisListComponent  from "./crisis-list.component";
import CrisisDetailComponent  from "./crisis-detail.component";

const crisisRoutes : Routes = [{
    path: '',
    redirectTo: '/crisis-center',
    pathMatch: 'full',
  },{
  path: 'crisis-center',
  component: CrisisCenterComponent,
  children: [{
    path: '',
    component: CrisisListComponent,
    children: [{
      path: ':id',
      component: CrisisDetailComponent
    },{
      path: '',
      component: CrisisCenterHomeComponent
    }]
  }]
}];
 /*[{
  path: '',
  component: CrisisCenterComponent,
  children: [{
    path: '',
    component: CrisisListComponent,
    children: [{
      path: ':id',
      component: CrisisDetailComponent
    },{
      path: '',
      component: CrisisCenterHomeComponent
    }]
  }]
}];*/

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule]
})

export default class CrisisRoutingModule {

}