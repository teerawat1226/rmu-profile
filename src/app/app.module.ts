import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileTeerawatComponent } from './profile/profile-teerawat/profile-teerawat.component';
import { ProfilePanuwatComponent } from './profile/profile-panuwat/profile-panuwat.component';
import { ProfileWeerapolComponent } from './profile/profile-weerapol/profile-weerapol.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileTeerawatComponent,
    ProfilePanuwatComponent,
    ProfileWeerapolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
      { path: 'profile/Teerawat', component: ProfileTeerawatComponent },
      { path: 'profile/panuwat', component: ProfilePanuwatComponent },
      { path: 'profile/weerapol', component: ProfileWeerapolComponent },
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }