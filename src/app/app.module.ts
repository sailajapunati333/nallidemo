import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrasentComponent } from './prasent/prasent.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { CartlistComponent } from './cartlist/cartlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PrasentComponent,
    WomenComponent,
    MenComponent,
    HomeComponent,
    OffersComponent,
    CartlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
