import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomepageScrollspyComponent } from '../../ui/homepage-scrollspy/homepage-scrollspy.component';
import { ScrollSpyDirective } from '../../utils/scroll-spy.directive';
import { HomePageFooterComponent } from '../../ui/home-page-footer/home-page-footer.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomepageScrollspyComponent,
    HomePageFooterComponent,
    ScrollSpyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
