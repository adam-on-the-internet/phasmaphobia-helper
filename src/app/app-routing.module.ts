import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {PhasmaphobiaHelperComponent} from "./components/phasmaphobia-helper/phasmaphobia-helper.component";

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Info, component: InfoComponent},
  // projects
  {path: ROUTES_ENUM.Phasmaphobia, component: PhasmaphobiaHelperComponent},
  // default
  {path: "**", redirectTo: ROUTES_ENUM.Phasmaphobia},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
})
export class AppRoutingModule {
}
