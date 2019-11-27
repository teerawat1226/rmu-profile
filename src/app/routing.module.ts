import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MobileDetailModalComponent } from './mobile-detail-modal/mobile-detail-modal.component';
import { BrowserModule } from '@angular/platform-browser';

// const routes: Routes = [
//   { path: '', component: AppComponent },
//   { path: 'test', component: MobileDetailModalComponent }
// ];
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'test', component: MobileDetailModalComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
