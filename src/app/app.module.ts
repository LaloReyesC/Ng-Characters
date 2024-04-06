import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnepieceModule } from './onepiece/onepiece.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnepieceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
