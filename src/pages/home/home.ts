import { OpenWeatherCity } from './../../models/openWeatherCity.model';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { CityProvider } from './../../providers/city/city';
import { OpenWeatherProvider } from './../../providers/open-weather/open-weather';
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
    if (!city || !city.length)
      return;

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

  saveCity(city:OpenWeatherCity) {
    let alert = this.alert.create({
      title: 'Adicionar aos favoritos',
      message: 'Você deseja adicionar ' + city.name + ' às suas cidades favoritas?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            let loading = this.loading.create({
              content: 'Aguarde um momento...'
            })
            loading.present();

            this.cityProvider.save(city.id)
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