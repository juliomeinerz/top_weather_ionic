import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
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
