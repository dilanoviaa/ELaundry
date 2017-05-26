import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { UserDataProvider } from '../../provider/user-data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http'; 

/*
  Generated class for the Editpassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editpassword',
  templateUrl: 'editpassword.html'
})
export class EditpasswordPage {
  users: {password?: string, old_password?:string, user_id?:number, password_confirm?: string} = {};
    submitted = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: Http,
              public userDataProvider:UserDataProvider,
              public loadCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditpasswordPage');
  }

  forgetPassword(form: NgForm) {
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });

    if (form.valid) {
      loading.present();
      let input = JSON.stringify({
        old_password: this.users.old_password,
        password: this.users.password,
        password_confirm: this.users.password_confirm,
      });
      this.http.post("http://localhost/cobaapp1/projeks/change_password.php?user_id="+this.users.user_id,input).subscribe(data => {
           loading.dismiss();
           console.log(input);
           let response = data.json();
           if(response.status == 200){
              this.navCtrl.push(AccountPage);
           }
           this.showAlert(response.message);
           
        }, err => {
           loading.dismiss();
           this.showError(err);
        });
    }
  }
  showError(err: any){
    err.status==0?
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
  showAlert(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}

