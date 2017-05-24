import { Component } from '@angular/core';
import { DaftarPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';
import { NavController,ToastController,LoadingController, NavParams  } from 'ionic-angular';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { UserDataProvider } from '../../provider/user-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class MasukPage {
  users: {username?: string, password?: string} = {};
  submitted = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController,
              public loadCtrl: LoadingController,
              public userDataProvider:UserDataProvider) {}

  ionViewWillEnter(){

  }
  onLogin(form: NgForm) {
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });

    if (form.valid) {
    loading.present();
      let input = JSON.stringify({
        username: this.users.username,
        password: this.users.password
      });
        this.http.post("http://127.0.0.1/cobaapp1/projeks/login.php",input).subscribe(data => {
           let response = data.json();
           loading.dismiss();
           if(response.status == 200) {
             let user=response.data;
             this.userDataProvider.login(user.user_id,user.username,user.name,user.tanggallahir,user.email);
             console.log(user);
             this.navCtrl.push(TabsPage);
           } else {
             this.showAlert(response.message);
           }
        }, err => {
           loading.dismiss();
           this.showError(err);
        });

    }
  }
  showError(err: any){
    err.status==0?
    this.showAlert("Username atau password salah"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
  showAlert(val){
    let toast = this.toastCtrl.create({
      message: val,
      duration: 3000
    });
    toast.present();
  };

  launchDaftarPage(){
    this.navCtrl.push(DaftarPage);
  }
}
