import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
 
  constructor(private httpClient: HttpClient) { }
 
  // GET API method to retrieve forecast data for a city
  getLocalWeather(cityName: string) : Observable<any> {
     return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=bbf53334ce034485ecd22ddc6f2409d9`);
  }
}