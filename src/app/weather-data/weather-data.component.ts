import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../service/weather-data.service';
import { WeatherData } from '../model/WeatherData';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit{
  weatherData:WeatherData[] = [];
  constructor(private weatherDataService:WeatherDataService){

  }
  ngOnInit(): void {
    this.weatherDataService.getWeatherData().subscribe({
      next: (data: WeatherData[]) => {
        this.weatherData = data;
      }
    ,
    error: (error:any)=>{
      console.error('Error fetching Weather Data');
    }
  });
  }
}
