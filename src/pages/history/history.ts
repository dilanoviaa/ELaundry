import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http'; 
import { UserDataProvider } from '../../provider/user-data';

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  data: any=[];
  NamaToko: string;
  jenis_layanan: string;
  berat: number;
  harga_total: number;
  created_at: string;
  users:{user_id?:number} ={}  
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

  ionViewWillEnter() {
   //this.userDataProvider.hapuspelaundry();
   this.getInProgress();
   //this.userDataProvider.hapuspelaundry();
  }

  ngAfterViewInit() {
                this.getUserID();
  }

  getUserID() {
    this.userDataProvider.getID().then((username) => {
      this.users.user_id = username;
    });
  }

  getInProgress(){
  this.http.get("http://localhost/cobaapp1/projeks/show_data2.php?user_id="+this.users.user_id).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status== "200"){
        this.data= response.data; 
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
