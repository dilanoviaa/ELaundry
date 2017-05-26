import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HargaPage } from '../harga/harga';

/*
  Generated class for the Laundrydetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-laundrydetail',
  templateUrl: 'laundrydetail.html'
})
export class LaundrydetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  launchHargaPage(){
    this.navCtrl.push(HargaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaundrydetailPage');
  }

}
