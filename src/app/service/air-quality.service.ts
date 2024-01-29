import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirQuality } from '../model/AirQuality';
@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private apiUrl = '' 
  constructor(private http:HttpClient) { }

  getAirQualityData():Observable<AirQuality[]>{
    return this.http.get<AirQuality[]>(this.apiUrl);
  }
}
