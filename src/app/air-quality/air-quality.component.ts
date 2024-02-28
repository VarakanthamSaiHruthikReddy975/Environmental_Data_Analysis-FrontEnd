import { Component, OnInit } from '@angular/core';
import { AirQualityService } from '../service/air-quality.service';
import { AirQuality } from '../model/AirQuality';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {
  airQuality: AirQuality[] = []; // Initialize with an empty array for type safety and easier handling in template

  constructor(private airQualityService: AirQualityService) { }

  ngOnInit(): void {
    this.airQualityService.getAirQualityData().subscribe({
      next: (data: AirQuality[]) => {
        this.airQuality = data;
      },
      error: (error: any) => { // Type the error parameter
        console.error('Error fetching Air Quality Data:', error);
      }
    });
  }
}
