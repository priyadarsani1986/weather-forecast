import { Component, Input, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import * as _ from 'lodash';
import { ForecastData, ForecastResponse, WeatherObj } from '../forecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  forecastResponse: ForecastResponse[] = [];
  forecastData : ForecastData[] = []; 
  selectedDateObj: WeatherObj[] = [];
  
  @Input() parentData : string = "";

  constructor(private weatherServiceService: WeatherServiceService) { }

// Get method invoked from service, data grouped by the key 'dt_txt' field and split function to return the actual date without timestamp
  ngOnInit(): void {
  }
  ngOnChanges() {
    this.forecastData = [];
    this.weatherServiceService.getLocalWeather(this.parentData).subscribe(response => {
      if(response){
        let groupedData = _.groupBy( 
          response.list, function(data) {
            return data.dt_txt.split(' ')[0]
        })
        let groupData = Object.entries(groupedData);
        groupData.forEach(element => {
          this.forecastData.push({'dateVal':element[0],'weatherObj':element[1]});
        })
      }
      this.selectDate(0)
    })
  }

// SelectDate method to pass the selected index and get corresponding data as array object
  selectDate(selectedIndex: number) : void {
    this.selectedDateObj = this.forecastData[selectedIndex].weatherObj;
  }

// Kelvin to Celcius converter invoked in View
  temperatureConverter(valNum:string) : number {
    let kelval = parseFloat(valNum)
    return (kelval-273.15)
  }
}
