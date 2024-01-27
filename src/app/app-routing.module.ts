import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { WaterQualityComponent } from './water-quality/water-quality.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';

const routes: Routes = [
  {path: '', redirectTo: 'AirQuality', pathMatch: 'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'AirQuality', component:AirQualityComponent},
  {path:'WaterQuality', component:WaterQualityComponent},
  {path:'WeatherData', component:WeatherDataComponent},
  {path:'Visualization', component:VisualizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
