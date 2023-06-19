import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { ProductsComponent } from './_components/products/products.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MeditationDetailsComponent } from './_components/meditation-details/meditation-details.component';
import { MeditationsService } from './_services/meditations.service';
import { AudioPlayerComponent } from './_components/audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProductsComponent,
    MeditationDetailsComponent,
    AudioPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [MeditationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
