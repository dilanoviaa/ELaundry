import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';

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

launchHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaundrydetailPage');
  }

}
