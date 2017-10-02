import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, NavParams } from 'ionic-angular';
import { CityDetailsPage } from './city-details';

@NgModule({
  declarations: [
    CityDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CityDetailsPage),
  ],
})
export class CityDetailsPageModule {}
