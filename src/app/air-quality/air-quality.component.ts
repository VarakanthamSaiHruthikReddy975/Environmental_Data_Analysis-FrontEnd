import { Component, OnInit } from '@angular/core';
import { AirQualityService } from '../service/air-quality.service';
import { AirQuality } from '../model/AirQuality';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit{
  airQuality!: AirQuality[];
  constructor(private airQualityService:AirQualityService){

  }
  ngOnInit()
  {
      this.airQualityService.getAirQualityData().subscribe((data:AirQuality[])=>
      {
        this.airQuality = data;
      },
      error=>{
        console.error('Error fetching Air Quality Data')
      }
      
      );
  }
}
