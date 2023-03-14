import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './features/components/header/header.component';
import {NavbarComponent} from './features/components/navbar/navbar.component';
import {HomeComponent} from './pages/home/home.component';
import {SearchBarComponent} from './features/components/search-bar/search-bar.component';
import {ContentComponent} from './features/components/content/content.component';
import {CardComponent} from './features/components/card/card.component';
import {FooterComponent} from './features/components/footer/footer.component';
import {NewsletterComponent} from './features/components/newsletter/newsletter.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {hotelReducer} from "./features/store/hotels.reducers";
import {HotelsEffects} from "./features/store/hotels.effects";
import { HotelListingComponent } from './pages/hotel-listing/hotel-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    SearchBarComponent,
    ContentComponent,
    CardComponent,
    FooterComponent,
    NewsletterComponent,
    HotelListingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, StoreModule.forRoot(
    {},{}
  ),
    StoreModule.forFeature('hotels', hotelReducer),
    EffectsModule.forRoot(
    [HotelsEffects]),

StoreDevtoolsModule.instrument({
  maxAge: 25,
  logOnly: !isDevMode()
})
],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
