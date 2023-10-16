import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/page/homepage/homepage.component';
import { StorePageComponent } from 'src/page/StorePage/StorePage.component';
import { IntroPageComponent } from 'src/page/IntroPage/IntroPage.component';
import { NewsPageComponent } from 'src/page/NewsPage/NewsPage.component';
import { ContactPageComponent } from 'src/page/ContactPage/ContactPage.component';
const routes: Routes = [
  {
    path : 'home-page',
    component : HomepageComponent,
  },
  {
    path : 'store-page',
    component : StorePageComponent,
  },
  {
    path : 'intro-page',
    component : IntroPageComponent,
  },
  {
    path : 'news-page',
    component : NewsPageComponent,
  },
  {
    path : 'contact-page',
    component : ContactPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
