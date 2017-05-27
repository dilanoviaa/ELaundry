import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { LaundrydetailPage } from '../laundrydetail/laundrydetail';
import { SearchPage } from '../search/search';
import { Http } from '@angular/http'; 
import { KomentarPage } from '../komentar/komentar';

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

  data: any;
  NamaToko:string;
  Alamat:string;
  Deskripsi:string;
  Likes:number;
  Foto: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: Http,
              public loadCtrl: LoadingController) {}

getPelaundry(){
 this.http.get("http://localhost/cobaapp1/projeks/show_data.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status== "200"){
        this.data= response.data; 
      }
    });
}

launchLaundrydetailPage(){
    this.navCtrl.push(LaundrydetailPage);
  }

 launchSearchPage(){
    this.navCtrl.push(SearchPage);
  } 
 launchKomentarPage(){
    this.navCtrl.push(KomentarPage);
  } 
  ionViewDidLoad() {

    console.log('ionViewDidLoad BerandaPage');
  }
  ionViewWillEnter() {

   this.getPelaundry();
  }

}
