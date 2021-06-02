import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { HouseDetailPageComponent } from './pages/house-detail-page/house-detail-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    CharacterDetailPageComponent,
    HousesPageComponent,
    HouseDetailPageComponent,
    ChronologyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
