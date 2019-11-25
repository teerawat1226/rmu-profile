import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileWeerapolComponent } from './profile/profile-weerapol/profile-weerapol.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileWeerapolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileWeerapolComponent },
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
