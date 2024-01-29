import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private weatherDataUrl = ''
  constructor(private http:HttpClient) { }

  getWeatherData():Observable<WeatherData[]>{
    return this.http.get<WeatherData[]>(this.weatherDataUrl);
  }
}
