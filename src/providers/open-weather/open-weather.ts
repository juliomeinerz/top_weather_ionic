import { OpenWeatherCity } from './../../models/openWeatherCity.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpenWeatherProvider {

  baseCityGroupUrl: string =  "http://api.openweathermap.org/data/2.5/group?";
  baseCityUrl: string = "http://api.openweathermap.org/data/2.5/find?";
  apiKey: string = "&appid=91b2123249c98429df659cab8d6e6fc7";
  apiSuffix: string = "&units=metric&lang=pt";

  constructor(
    public http: Http
  ) {}

  getCityInfoByCode(cities: number[]): Promise <OpenWeatherCity[]> {
    let url, openWeatherCities : OpenWeatherCity[] = [];
    url = this.baseCityGroupUrl + "id=" + cities.join(",") + this.apiKey + this.apiSuffix;

    return new Promise <OpenWeatherCity[]> ((resolve) => {
      return this.http.get(url).map(res => res.json()).subscribe((cities) => {
        cities.list.map((city) => {
          let openWeatherCity = new OpenWeatherCity();
          openWeatherCity.id = city.id;
          openWeatherCity.name = city.name;
          openWeatherCities.push(openWeatherCity);
        })
        resolve(openWeatherCities);
      });
    });
  }

  getCityInfoByName(city: string): Promise <OpenWeatherCity[]> {
    let url, openWeatherCities : OpenWeatherCity[] = [];
    url = this.baseCityUrl + "q=" + city + this.apiKey + this.apiSuffix;

    return new Promise <OpenWeatherCity[]> ((resolve) => {
      return this.http.get(url).map(res => res.json()).subscribe((cities) => {
        cities.list.map((city) => {
          let openWeatherCity = new OpenWeatherCity();
          openWeatherCity.id = city.id;
          openWeatherCity.name = city.name;
          openWeatherCity.country = city.sys.country;
          openWeatherCities.push(openWeatherCity);
        })
        resolve(openWeatherCities);
      });
    });
  }
}
