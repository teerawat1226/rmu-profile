import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileTeerawatComponent } from './profile/profile-teerawat/profile-teerawat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProfileTeerawatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
      { path: 'profile/Teerawat', component: ProfileTeerawatComponent },
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
