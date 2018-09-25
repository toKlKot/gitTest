import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KebabPageComponent} from './kebab-page/kebab-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {InfoKebabPageComponent} from './info-kebab-page/info-kebab-page.component';
import {NotFoundComponent} from './not-found/not-found.component';



const appRoutes: Routes = [
  {path:'kebabs',component: KebabPageComponent, children: [
      {path:':id/:name',component: InfoKebabPageComponent}
    ]},
  {path:'',component: HomePageComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
