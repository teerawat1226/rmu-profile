import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { MobileDetailModalComponent } from './mobile-detail-modal/mobile-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDetailModalComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
