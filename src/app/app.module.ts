import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { WaterQualityComponent } from './water-quality/water-quality.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    AirQualityComponent,
    WaterQualityComponent,
    WeatherDataComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
