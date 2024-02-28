import { Component, OnInit } from '@angular/core';
import { WaterQuality } from '../model/WaterQuality';
import { WaterQualityService } from '../service/water-quality.service';

@Component({
  selector: 'app-water-quality',
  templateUrl: './water-quality.component.html',
  styleUrls: ['./water-quality.component.css']
})
export class WaterQualityComponent implements OnInit{
  waterQuality: WaterQuality[] = [];

  constructor(private waterQualityService:WaterQualityService){

  }
  ngOnInit(): void {
    this.waterQualityService.getWaterQualityData().subscribe({
      next:(data:WaterQuality[])=>{
        this.waterQuality = data;
      },
      error:(error:any)=>{
        console.error('error fetching Water Quality Data:',error);
      }
    });
  }
}
