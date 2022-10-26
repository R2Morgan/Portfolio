import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home-page.module';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DevlogPageComponent } from './devlog/feature/devlog-page/devlog-page.component';

import { AboutPageComponent } from './about/feature/about-page/about-page.component';
import { ContactPageComponent } from './contact/feature/contact-page/contact-page.component';
import { HomePageComponent } from './home/feature/home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio/feature/portfolio-page/portfolio-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DevlogPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
