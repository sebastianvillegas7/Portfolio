import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { IntroComponent } from './secciones/intro/intro.component';
import { PortfolioComponent } from './secciones/portfolio/portfolio.component';
import { ContactComponent } from './secciones/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    IntroComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
