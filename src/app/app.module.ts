import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvotingModule } from './evoting/evoting.module';

// import { Voter } from './evoting/model.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EvotingModule
    

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
