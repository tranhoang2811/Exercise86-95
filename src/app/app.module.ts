import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise86Component } from './exercise86/exercise86.component';
import { Exercise87Component } from './exercise87/exercise87.component';
import { Exercise90Component } from './exercise90/exercise90.component';
import { Exercise91Component } from './exercise91/exercise91.component';
import { Exercise92Component } from './exercise92/exercise92.component';
import { Exercise88ProductListComponent } from './exercise88/exercise88-product-list/exercise88-product-list.component';
import { Exercise88ProductDetailsComponent } from './exercise88/exercise88-product-details/exercise88-product-details.component';
import { Exercise89CategoryListComponent } from './exercise89/exercise89-category-list/exercise89-category-list.component';
import { Exercise89ProductListComponent } from './exercise89/exercise89-product-list/exercise89-product-list.component';
import { Exercise93Component } from './exercise93/exercise93.component';
import { Exercise95Component } from './exercise95/exercise95.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise86Component,
    Exercise87Component,
    Exercise90Component,
    Exercise91Component,
    Exercise92Component,
    Exercise88ProductListComponent,
    Exercise88ProductDetailsComponent,
    Exercise89CategoryListComponent,
    Exercise89ProductListComponent,
    Exercise93Component,
    Exercise95Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
