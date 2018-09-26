import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KebabPageComponent} from './kebab-page/kebab-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {InfoKebabPageComponent} from './kebab-page/info-kebab-page/info-kebab-page.component';
import {NotFoundComponent} from './not-found/not-found.component';



const appRoutes: Routes = [
  {path:'kebabs',component: KebabPageComponent, children: [
      {path:':id/:name',component: InfoKebabPageComponent}
    ]},
  {path:'',component: HomePageComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'**', redirectTo: '/kebabs'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
