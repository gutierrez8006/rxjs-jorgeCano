import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { MapMergeMapComponent } from './map-merge-map/map-merge-map.component';
import { SkipUntilShareReplayComponent } from './skip-until-share-replay/skip-until-share-replay.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionComponent,
    MapMergeMapComponent,
    SkipUntilShareReplayComponent,
    CatchErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
