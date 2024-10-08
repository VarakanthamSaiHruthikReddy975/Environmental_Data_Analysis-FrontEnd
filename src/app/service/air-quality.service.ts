import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirQuality } from '../model/AirQuality';
@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private apiUrl = 'http://localhost:8080/api/air-quality/allRecords'; 
  constructor(private http:HttpClient) { }

  //Get all air quality records 
  getAirQualityData():Observable<AirQuality[]>{
    return this.http.get<AirQuality[]>(this.apiUrl);
  }
}
