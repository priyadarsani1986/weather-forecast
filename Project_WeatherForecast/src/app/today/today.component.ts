import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit {

//Objects used are intialized 
  forecastData : any;
  selectedDateObj: any;

  constructor(private weatherServiceService: WeatherServiceService) { }
  
// Get method invoked from service, data grouped by the key 'dt_txt' field and split function to return the actual date without timestamp

  ngOnInit(): void {
    this.weatherServiceService.getLocalWeather('Southampton').subscribe(response => {
        if(response){
          let groupedData = _.groupBy( 
            response.list, function(data) {
            return data.dt_txt.split(' ')[0]
        })
        this.forecastData = Object.entries(groupedData)
      }
      this.selectDate(0)
    })
  }

// SelectDate method to pass the selected index and get corresponding data as array object
  selectDate(selectedIndex: any){
    console.log(selectedIndex)
    this.selectedDateObj = this.forecastData[selectedIndex]
  }

// Kelvin to Celcius converter invoked in View
  temperatureConverter(valNum:any) {
    valNum = parseFloat(valNum)
    return (valNum-273.15)
  }
}