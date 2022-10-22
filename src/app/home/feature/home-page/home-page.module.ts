import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomepageScrollspyComponent } from '../../ui/homepage-scrollspy/homepage-scrollspy.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomepageScrollspyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
