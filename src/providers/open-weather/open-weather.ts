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
          openWeatherCity.country = city.sys.country;
          openWeatherCity.temp = city.main.temp;
          openWeatherCity.clouds = city.clouds.all;
          openWeatherCity.lat = city.coord.lat;
          openWeatherCity.lon = city.coord.lon;
          openWeatherCity.weatherDescription = city.weather[0].deion;
          openWeatherCity.weatherIconName = city.weather[0].icon;
          switch (openWeatherCity.weatherIconName) {
            case ("01d"):
              openWeatherCity.weatherIcon = "sunny";
              openWeatherCity.weatherDescription = "Ensolarado";
              break;
            case ("01n"):
              openWeatherCity.weatherIcon = "moon";
              openWeatherCity.weatherDescription = "Tempo aberto";
              break;
            case ("02d"):
              openWeatherCity.weatherIcon = "partly-sunny";
              openWeatherCity.weatherDescription = "Nuvens esparsas";
              break;
            case ("02n"):
              openWeatherCity.weatherIcon = "cloudy-night";
              openWeatherCity.weatherDescription = "Nuvens esparsas";
              break;
            case ("03d"):
              openWeatherCity.weatherIcon = "cloudy";
              openWeatherCity.weatherDescription = "Nublado";
              break;
            case ("03n"):
              openWeatherCity.weatherIcon = "cloudy";
              openWeatherCity.weatherDescription = "Nublado";
              break;
            case ("04d"):
              openWeatherCity.weatherIcon = "partly-sunny";
              openWeatherCity.weatherDescription = "Parc. nublado";
              break;
            case ("04n"):
              openWeatherCity.weatherIcon = "cloudy-night";
              openWeatherCity.weatherDescription = "Parc. nublado";
              break;
            case ("09d"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Pancadas";
              break;
            case ("09n"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Pancadas";
              break;
            case ("10d"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Chuva";
              break;
            case ("10n"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Chuva";
              break;
            case ("11d"):
              openWeatherCity.weatherIcon = "thunderstorm";
              openWeatherCity.weatherDescription = "Temporal";
              break;
            case ("11n"):
              openWeatherCity.weatherIcon = "thunderstorm";
              openWeatherCity.weatherDescription = "Temporal";
              break;
            case ("13d"):
              openWeatherCity.weatherIcon = "snow";
              openWeatherCity.weatherDescription = "Neve";
              break;
            case ("13n"):
              openWeatherCity.weatherIcon = "snow";
              openWeatherCity.weatherDescription = "Neve";
              break;
            case ("50d"):
              openWeatherCity.weatherIcon = "reorder";
              openWeatherCity.weatherDescription = "Neblina/Nevoeiro";
              break;
            case ("50n"):
              openWeatherCity.weatherIcon = "reorder";
              openWeatherCity.weatherDescription = "Neblina/Nevoeiro";
              break;
          }
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
          openWeatherCity.temp = city.main.temp;
          openWeatherCity.clouds = city.clouds.all;
          openWeatherCity.lat = city.coord.lat;
          openWeatherCity.lon = city.coord.lon;
          openWeatherCity.weatherDescription = city.weather[0].deion;
          openWeatherCity.weatherIconName = city.weather[0].icon;
          switch (openWeatherCity.weatherIconName) {
            case ("01d"):
              openWeatherCity.weatherIcon = "sunny";
              openWeatherCity.weatherDescription = "Ensolarado";
              break;
            case ("01n"):
              openWeatherCity.weatherIcon = "moon";
              openWeatherCity.weatherDescription = "Tempo aberto";
              break;
            case ("02d"):
              openWeatherCity.weatherIcon = "partly-sunny";
              openWeatherCity.weatherDescription = "Nuvens esparsas";
              break;
            case ("02n"):
              openWeatherCity.weatherIcon = "cloudy-night";
              openWeatherCity.weatherDescription = "Nuvens esparsas";
              break;
            case ("03d"):
              openWeatherCity.weatherIcon = "cloudy";
              openWeatherCity.weatherDescription = "Nublado";
              break;
            case ("03n"):
              openWeatherCity.weatherIcon = "cloudy";
              openWeatherCity.weatherDescription = "Nublado";
              break;
            case ("04d"):
              openWeatherCity.weatherIcon = "partly-sunny";
              openWeatherCity.weatherDescription = "Parc. nublado";
              break;
            case ("04n"):
              openWeatherCity.weatherIcon = "cloudy-night";
              openWeatherCity.weatherDescription = "Parc. nublado";
              break;
            case ("09d"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Pancadas";
              break;
            case ("09n"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Pancadas";
              break;
            case ("10d"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Chuva";
              break;
            case ("10n"):
              openWeatherCity.weatherIcon = "rainy";
              openWeatherCity.weatherDescription = "Chuva";
              break;
            case ("11d"):
              openWeatherCity.weatherIcon = "thunderstorm";
              openWeatherCity.weatherDescription = "Temporal";
              break;
            case ("11n"):
              openWeatherCity.weatherIcon = "thunderstorm";
              openWeatherCity.weatherDescription = "Temporal";
              break;
            case ("13d"):
              openWeatherCity.weatherIcon = "snow";
              openWeatherCity.weatherDescription = "Neve";
              break;
            case ("13n"):
              openWeatherCity.weatherIcon = "snow";
              openWeatherCity.weatherDescription = "Neve";
              break;
            case ("50d"):
              openWeatherCity.weatherIcon = "reorder";
              openWeatherCity.weatherDescription = "Neblina/Nevoeiro";
              break;
            case ("50n"):
              openWeatherCity.weatherIcon = "reorder";
              openWeatherCity.weatherDescription = "Neblina/Nevoeiro";
              break;
          }
          openWeatherCities.push(openWeatherCity);
        })
        resolve(openWeatherCities);
      });
    });
  }
}
