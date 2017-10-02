import { OpenWeatherProvider } from './../../providers/open-weather/open-weather';
import { CityProvider } from './../../providers/city/city';
import { OpenWeatherCity } from './../../models/openWeatherCity.model';
import { CityDetailsPage } from '../city-details/city-details';
import { Component, Injectable } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  citiesFound = [];

  constructor(
    public navCtrl: NavController,
    public http : Http,
    public alert: AlertController,
    public loading: LoadingController,
    public cityProvider: CityProvider,
    public openWeatherProvider: OpenWeatherProvider
  ) {}

  getCityData(city: string) {
    let loading = this.loading.create({
      content: 'Aguarde um momento...'
    });
    loading.present();
    this.openWeatherProvider.getCityInfoByName(city)
    .then((cities) => {
      this.citiesFound = [];
      cities.map((city) => {
        this.citiesFound.push(city);
      })
    })
    loading.dismiss();
  }

  cityDetails(city: OpenWeatherCity) {
    this.navCtrl.push(CityDetailsPage, {
      city: city
    });
  }

  saveCity(city:number) {
    let alert = this.alert.create({
      title: 'Adicionar aos favoritos',
      message: 'Você deseja adicionar esta cidade aos seus favoritos?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            let loading = this.loading.create({
              content: 'Aguarde um momento...'
            })
            loading.present();

            this.cityProvider.save(city)
            .then((res) => {
              this.cityProvider.getCityList();
              loading.dismiss();
            });
          }
        },
        {
          text: 'Não',
          role: 'cancel'
        }
      ]
    })
    alert.present();
  }
}