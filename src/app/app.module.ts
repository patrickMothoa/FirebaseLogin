import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCK2QAI5DvhuIIBUyTrLX3_YNlnvlW_IFg",
  authDomain: "my-first-database-53cf8.firebaseapp.com",
  databaseURL: "https://my-first-database-53cf8.firebaseio.com",
  projectId: "my-first-database-53cf8",
  storageBucket: "",
  messagingSenderId: "59233397763",
  appId: "1:59233397763:web:07c781e954669c11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  
}
