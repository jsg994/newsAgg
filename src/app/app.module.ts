import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './app-routing.module';
import { SportsComponent } from './sports/sports.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SportsComponent,
    LandingPageComponent,
    TechComponent,
    BusinessComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
