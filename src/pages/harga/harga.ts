import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http'; 
import { HistoryPage } from '../history/history';
import { UserDataProvider } from '../../provider/user-data';

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
  item: any;
  data: any;
  NamaToko: string;
  Alamat: string;
  Deskripsi: string;
  Foto: string;
  id_pelaundry: number;
  harga_limajam: number;
  harga_satuhari: number;
  harga_duahari: number;
  harga_tigahari: number;
  harga_empathari: number;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public toastCtrl: ToastController,
              public http: Http,
              public loadCtrl: LoadingController,
              public userDataProvider:UserDataProvider) {
              }

  ngAfterViewInit() {
                this.getidpelaundry();
                this.getnamatoko();
                this.getalamat();
                this.getdeskripsi();
                this.getfoto();
                //this.gethargalimajam();
                //this.gethargasatuhari();
                //this.gethargaduahari();
                //this.gethargatigahari();
                //this.gethargaempathari();
  }

  getidpelaundry() {
    this.userDataProvider.getidpelaundry().then((data) => {
      this.id_pelaundry = data.id_pelaundry;
    });
  }

  getnamatoko() {
    this.userDataProvider.getnamatoko().then((data) => {
      this.NamaToko = data.NamaToko;
    });
  }

  getalamat() {
    this.userDataProvider.getalamat().then((data) => {
      this.Alamat = data.Alamat;
    });
  }

  getdeskripsi() {
    this.userDataProvider.getdeskripsi();
  }

  getfoto() {
    this.userDataProvider.getfoto();
  }

  launchHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HargaPage');
  }

}
