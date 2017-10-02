import { OpenWeatherCity } from './../../models/openWeatherCity.model';
import { OpenWeatherProvider } from './../../providers/open-weather/open-weather';
import { Http } from '@angular/http';
import { CityProvider } from './../../providers/city/city';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  cities = [];
  error: string;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public loading: LoadingController,
    public cityProvider: CityProvider,
    public openWeatherProvider: OpenWeatherProvider,
    public alert: AlertController
  ) {}

  getFavoriteCities() {
    this.cityProvider.getCityList()
    .then((cities) => {
      cities.map((city) => {
        this.cities.push(city);
      });
    })
    .then(() => {
      if (!this.cities.length)
        return;

      this.openWeatherProvider.getCityInfoByCode(this.cities).then((res) => {
        this.cities = res;
      });
    })
    .catch(() => {
      this.error = "Não foi possível carregar a lista de cidades.";
    })
  }

  removeFromFavorites(cityCode:number) {
    let alert = this.alert.create({
      title: "Remover dos favoritos",
      message: "Você deseja remover a cidade de seus favoritos?",
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            let loading = this.loading.create({
              content: 'Removendo a cidade de seus favoritos...'
            })
            loading.present();

            this.cityProvider.delete(cityCode)
            .then(() => {
              loading.dismiss();
              this.cities = [];
              this.getFavoriteCities();
            })
            .catch(() => {
              loading.dismiss();
            })
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

  ionViewDidLoad() {
    let loading = this.loading.create({
      content: 'Carregando a lista de cidades favoritas...'
    })
    loading.present();
    this.getFavoriteCities();
    loading.dismiss();
  }
}
