import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CityDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city-details',
  templateUrl: 'city-details.html',
})
export class CityDetailsPage {
  public city;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.city = navParams.get("city");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CityDetailsPage');
  }

}
