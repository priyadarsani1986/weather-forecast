import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastData, ForecastResponse } from './forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
 
  constructor(private httpClient: HttpClient) { }
 
  // GET API method to retrieve forecast data for a city  
  getLocalWeather(cityName: string) : Observable<ForecastResponse> {

    const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
    let params = new HttpParams();
      params = params.append('q', cityName)
      params = params.append('appid','bbf53334ce034485ecd22ddc6f2409d9')
    
    return this.httpClient.get<ForecastResponse>(weatherUrl + params); 
  }
}

