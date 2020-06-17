import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BusinessComponent } from './business/business.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {path:'news', component: NewsComponent},
  {path: 'sports', component: SportsComponent},
  {path: '', component: LandingPageComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'bitcoin', component: BitcoinComponent },
  {path: 'tech', component: TechComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }