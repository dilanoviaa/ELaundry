import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http'; 

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    data: any=[];
    NamaToko: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: Http,
              public loadCtrl: LoadingController) {
                this.getPelaundry();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
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

  getItems(ev) {
    // Reset items back to all of the items
    this.getPelaundry();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
