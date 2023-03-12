import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/components/header/header.component';
import { NavbarComponent } from './features/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './features/components/search-bar/search-bar.component';
import { ContentComponent } from './features/components/content/content.component';
import { CardComponent } from './features/components/card/card.component';
import { FooterComponent } from './features/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, HomeComponent, SearchBarComponent, ContentComponent, CardComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
