import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DaftarPage } from '../about/about';
import { MasukPage } from '../home/home';
import { UserDataProvider } from '../../provider/user-data';

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public userDataProvider:UserDataProvider, public navCtrl: NavController, public navParams: NavParams) {}
  ionViewWillEnter(){
    this.userDataProvider.logout();
    //this.userDataProvider.hapuspelaundry();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  launchDaftarPage(){
    this.navCtrl.push(DaftarPage);
  }

  launchMasukPage(){
    this.navCtrl.push(MasukPage);
  }

}
