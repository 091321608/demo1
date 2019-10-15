import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PowPipe } from './pow.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UpperPipe } from './upper.pipe';
import { ReversdatePipe } from './reversdate.pipe';
import { CarsPageComponent } from './cars-page/cars-page.component';
import {FormsModule} from '@angular/forms';
import { CarsFilterPipe } from './cars-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PowPipe,
    HomePageComponent,
    AboutPageComponent,
    UpperPipe,
    ReversdatePipe,
    CarsPageComponent,
    CarsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
