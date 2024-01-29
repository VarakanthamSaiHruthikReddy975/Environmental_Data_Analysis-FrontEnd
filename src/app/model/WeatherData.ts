
export interface WeatherData {
    id?: number;
    location: string;
    dateTime: Date;
    temperature: number;
    humidity: number;
    windSpeed: number;
    rainFall: number;
}