import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {KebabService} from './kebab-page/services/kebab.service';
import { HomePageComponent } from './home-page/home-page.component';
import { KebabPageComponent } from './kebab-page/kebab-page.component';
import {AppRoutingModule} from './app-routing.module';
import { InfoKebabPageComponent } from './kebab-page/info-kebab-page/info-kebab-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    KebabPageComponent,
    InfoKebabPageComponent,
    NotFoundComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [KebabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
