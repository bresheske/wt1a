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
import { ContactComponent } from './pages/contact/contact.component';
import { AdministratorAwardComponent } from './pages/administrator-award/administrator-award.component';
import { InnovativeGrantAwardComponent } from './pages/innovative-grant-award/innovative-grant-award.component';
import { OutstandingServiceAwardComponent } from './pages/outstanding-service-award/outstanding-service-award.component';
import { ScholarshipComponent } from './pages/scholarship/scholarship.component';
import { Conference2018Component } from './pages/conference2018/conference2018.component';
import { ExhibitorsComponent } from './pages/exhibitors/exhibitors.component';
import { OshkoshCreditComponent } from './pages/oshkosh-credit/oshkosh-credit.component';
import { ProgramProposalComponent } from './pages/program-proposal/program-proposal.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { Conference2017Component } from './pages/conference2017/conference2017.component';

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
      { path: 'contact', component: ContactComponent },
      { path: 'administrator-award', component: AdministratorAwardComponent },
      { path: 'innovative-grant-award', component: InnovativeGrantAwardComponent },
      { path: 'outstanding-service-award', component: OutstandingServiceAwardComponent },
      { path: 'scholarship', component: ScholarshipComponent },
      { path: 'conference-2018', component: Conference2018Component },
      { path: 'conference-2017', component: Conference2017Component },
      { path: 'exhibitors', component: ExhibitorsComponent },
      { path: 'oshkosh-credit', component: OshkoshCreditComponent },
      { path: 'program-proposal', component: ProgramProposalComponent },
      { path: 'resources', component: ResourcesComponent },
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
    MembershipComponent,
    ContactComponent,
    AdministratorAwardComponent,
    InnovativeGrantAwardComponent,
    OutstandingServiceAwardComponent,
    ScholarshipComponent,
    Conference2018Component,
    ExhibitorsComponent,
    OshkoshCreditComponent,
    ProgramProposalComponent,
    ResourcesComponent,
    Conference2017Component
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
