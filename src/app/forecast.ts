import { DecimalPipe, Time } from "@angular/common";

export class ForecastResponse {
    "cod": string
    "message": number
    "cnt": number
    "list": Array<WeatherObj>
}

export interface ForecastData {
    dateVal : string;
    weatherObj : Array<WeatherObj>;
}

export interface WeatherObj {
    "dt" : Date;
    "main" : Main;
    "weather" : Array<Weather>;
    "clouds" : Clouds;
    "wind" : Wind;
    "visibility" : number;
    "pop" : number;
    "sys" : Sys;
    "dt_txt" : string;
}
export interface Main {
    "temp": string,
    "feels_like": DecimalPipe,
    "temp_min": string,
    "temp_max": string,
    "pressure": number,
    "sea_level": number,
    "grnd_level": number,
    "humidity": number,
    "temp_kf": DecimalPipe
}
export interface Weather {
    "id": number,
    "main": string,
    "description": string,
    "icon": string
}
export interface Clouds {
    "all" : number
}
export interface Wind {
    "speed": DecimalPipe
    "deg": number
}
export interface Sys {
    "pod" : string
}
