import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';

/*
  Generated class for the Harga page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-harga',
  templateUrl: 'harga.html'
})
export class HargaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  launchHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HargaPage');
  }

}
