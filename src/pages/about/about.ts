import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import { UserDataProvider } from '../../provider/user-data';

@Component({
  selector: 'page-about', 
  templateUrl: 'about.html'
})
export class DaftarPage {
  users: {username?: string, name?: string, email?: string, password?: string, tanggallahir?:string} = {};
    submitted = false;

  public tanggallahir = {
    
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: Http,
              public userDataProvider:UserDataProvider,
              public loadCtrl: LoadingController) {

  }

  onSignup(form: NgForm) {
                this.submitted = true;
                let loading = this.loadCtrl.create({
                    content: 'Tunggu sebentar...'
                });

                if (form.valid) {
                  loading.present();
                  let input = JSON.stringify({
                    username: this.users.username,
                    name: this.users.name,
                    email: this.users.email,
                    password: this.users.password,
                    tanggallahir: this.users.tanggallahir,
                  });
                  this.http.post("http://127.0.0.1/cobaapp1/projeks/register.php",input).subscribe(data => {
                       loading.dismiss();
                       let response = data.json();
                       if(response.status == 200){
                          let user=response.data;
                          this.userDataProvider.signup(user.username);
                          this.navCtrl.push(TabsPage);
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

