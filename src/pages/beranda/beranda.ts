import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaundrydetailPage } from '../laundrydetail/laundrydetail';
import { SearchPage } from '../search/search';

/*
  Generated class for the Beranda page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html'
})
export class BerandaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

launchLaundrydetailPage(){
    this.navCtrl.push(LaundrydetailPage);
  }

 launchSearchPage(){
    this.navCtrl.push(SearchPage);
  } 

  ionViewDidLoad() {

    console.log('ionViewDidLoad BerandaPage');
  }

}
