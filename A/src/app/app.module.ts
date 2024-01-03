import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';
import { HomeServiceService } from './home-service.service';

@NgModule({
  declarations: [AppComponent, Home1Component, Home2Component],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule], // Add HttpClientModule to the imports array
  providers: [HomeServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
