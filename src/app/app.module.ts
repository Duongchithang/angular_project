import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/layout/header/header.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from 'src/layout/content/content.component';
import { CategoryComponent } from 'src/components/Category/Category.component';
import { CategoryDetailComponent } from 'src/components/CategoryDetail/CategoryDetail.component';
import { NavigatorComponent } from 'src/components/navigator/navigator.component';
import { ProductComponent } from 'src/components/Product/Product.component';
import { ProductDetailComponent } from 'src/components/ProductDetail/ProductDetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    ContentComponent,
    CategoryComponent,
    CategoryDetailComponent,
    ProductComponent,
    ProductDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
