import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController, AlertController } from 'ionic-angular';
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
  data:any=[];
  NamaToko: string;
  jenis_layanan: string;
  berat: number;
  harga_total: number;
  created_at: string;
  komplain: string;
  users:{user_id?:number} ={}
  item:{id_pelaundry?:number}={}
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: Http,
              public loadCtrl: LoadingController,
              public userDataProvider:UserDataProvider,
              public alertCtrl: AlertController) {}
  
  doRefreshinProgress(refresher) {
    console.log('Begin async operation', refresher);
    this.getInProgress();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doRefreshComplain(refresher) {
    console.log('Begin async operation', refresher);
    this.getComplain();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ngAfterViewInit() {
                this.getUserID();
                this.getidpelaundry();
  }

  getUserID() {
    this.userDataProvider.getID().then((username) => {
      this.users.user_id = username;
    });
  }

  getidpelaundry() {
    this.userDataProvider.getidpelaundry().then((id_pelaundry) => {
      this.item.id_pelaundry = id_pelaundry;
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

  getComplain(){
  this.http.get("http://localhost/cobaapp1/projeks/show_data4.php?user_id="+this.users.user_id).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status== "200"){
        this.data= response.data; 
      }
    });
  }

  postComplain(){
    let input = JSON.stringify({
          complaint: this.data.komplain,
      });
  this.http.post("http://localhost/cobaapp1/projeks/complain.php?id_pelaundry="+this.item.id_pelaundry, input).subscribe(data => {
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
  

doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Komplain',
      message: "Silakan masukkan komplain Anda terhadap laundry ini",
      inputs: [
        {
          name: 'complaint',
          placeholder: 'Komplain Anda...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.postComplain();
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
