
export interface WaterQuality {
  id?: number;
  location: number;
  dateTime: Date;
  ph: number;
  turbidity: number;
  dissolvedOxygen: number;
  conductivity: number;
  temperature: number;
}