import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WaterQuality } from '../model/WaterQuality';

@Injectable({
  providedIn: 'root'
})
export class WaterQualityService {

  private waterQualityUrl = ''
  constructor(private http:HttpClient) { }

  getWaterQuality():Observable<WaterQuality[]>{
    return this.http.get<WaterQuality[]>(this.waterQualityUrl);
  }
}
