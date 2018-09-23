import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {KebabService} from './kebab.service';
import { HomePageComponent } from './home-page/home-page.component';
import { KebabPageComponent } from './kebab-page/kebab-page.component';
import {AppRoutingModule} from './app-routing.module';
import { InfoKebabPageComponent } from './info-kebab-page/info-kebab-page.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    KebabPageComponent,
    InfoKebabPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [KebabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
