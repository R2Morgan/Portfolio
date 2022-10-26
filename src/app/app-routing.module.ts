import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/feature/about-page/about-page.component';
import { ContactPageComponent } from './contact/feature/contact-page/contact-page.component';
import { DevlogPageComponent } from './devlog/feature/devlog-page/devlog-page.component';
import { HomePageComponent } from './home/feature/home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio/feature/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'portfolio', component: PortfolioPageComponent},
  {path: 'version-control', component: DevlogPageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
