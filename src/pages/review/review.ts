import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Review page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class ReviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl:AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Thank You!',
      message: 'Your response will be taken seriously by E-Laundry Team!',
      buttons: ['Ok']
    });
    alert.present()
  }
}
