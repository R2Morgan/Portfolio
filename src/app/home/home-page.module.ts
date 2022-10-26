import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './feature/home-page/home-page.component';
import { HomepageScrollspyComponent } from './ui/homepage-scrollspy/homepage-scrollspy.component';
import { ScrollSpyDirective } from './utils/scroll-spy.directive';
import { FooterComponent } from '../shared/ui/footer/footer.component';
import { RecentCardComponent } from './ui/recent-card/recent-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    HomepageScrollspyComponent,
    FooterComponent,
    RecentCardComponent,
    ScrollSpyDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
