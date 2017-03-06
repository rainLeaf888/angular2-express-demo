import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const ADMIN_ROUTERS: Routes= [{
  path: 'admin',
  loadChildren: "app/admin/admin.module#AdminModule",
}]
@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTERS)],
  exports: [RouterModule]
})

export default class AdminRoutingModule{

  constructor(argument) {
    // code...
  }
}