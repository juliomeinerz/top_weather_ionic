import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritesPage } from './../pages/favorites/favorites';
import { CityDetailsPage } from './../pages/city-details/city-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CityProvider } from '../providers/city/city';
import { WeatherProvider } from '../providers/weather/weather';
import { OpenWeatherProvider } from '../providers/open-weather/open-weather';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CityDetailsPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CityDetailsPage,
    FavoritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CityProvider,
    WeatherProvider,
    OpenWeatherProvider
  ]
})
export class AppModule {}
