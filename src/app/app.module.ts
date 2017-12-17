import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './modules/content/content.component';
import { AboutComponent } from './pages/about/about.component';
import { BylawsComponent } from './pages/bylaws/bylaws.component';
import { MainComponent } from './pages/main/main.component';
import { CommitteeComponent } from './pages/committee/committee.component';
import { HistoryComponent } from './pages/history/history.component';
import { MinutesComponent } from './pages/minutes/minutes.component';
import { MembershipComponent } from './pages/membership/membership.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'content', 
    component: ContentComponent,
    children: [
      { path: 'home', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'bylaws', component: BylawsComponent },
      { path: 'committee', component: CommitteeComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'minutes', component: MinutesComponent },
      { path: 'membership', component: MembershipComponent },
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    AboutComponent,
    BylawsComponent,
    MainComponent,
    CommitteeComponent,
    HistoryComponent,
    MinutesComponent,
    MembershipComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
