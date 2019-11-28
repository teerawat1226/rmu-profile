import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileTeerawatComponent } from './profile/profile-teerawat/profile-teerawat.component';
import { ProfilePanuwatComponent } from './profile/profile-panuwat/profile-panuwat.component';
import { ProfileWeerapolComponent } from './profile/profile-weerapol/profile-weerapol.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingListComponent } from './routing-list/routing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileTeerawatComponent,
    ProfilePanuwatComponent,
    ProfileWeerapolComponent,
    HomeComponent,
    MainPageComponent,
    RoutingListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
      { path: 'profile', component: HomeComponent },
      { path: 'profile/teerawat', component: ProfileTeerawatComponent },
      { path: 'profile/panuwat', component: ProfilePanuwatComponent },
      { path: 'profile/weerapol', component: ProfileWeerapolComponent },
      { path: 'homepage', component: MainPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
