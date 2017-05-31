import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { LaundrydetailPage } from '../laundrydetail/laundrydetail';
import { SearchPage } from '../search/search';
import { Http } from '@angular/http'; 
import { KomentarPage } from '../komentar/komentar';
import { UserDataProvider } from '../../provider/user-data';

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
  data: any=[];
  NamaToko:string;
  Alamat:string;
  Deskripsi:string;
  Likes:number;
  Foto: string;
  id_pelaundry:number;
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
              public userDataProvider:UserDataProvider) {}

doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

getPelaundry(){
 this.http.get("http://localhost/cobaapp1/projeks/show_data.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status== "200"){
        this.data= response.data; 
      }
    });
}

launchLaundrydetailPage(item){
    this.navCtrl.push(LaundrydetailPage, item);
    this.userDataProvider.pelaundry(item.id_pelaundry,item.NamaToko,item.Alamat,item.Deskripsi,item.Foto,item.harga_limajam,item.harga_satuhari,item.harga_duahari,item.harga_tigahari,item.harga_empathari);
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
   //this.userDataProvider.hapuspelaundry();
   this.getPelaundry();
   //this.userDataProvider.hapuspelaundry();
  }

}
