import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { UserDataProvider } from '../../provider/user-data';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
/*
  Generated class for the Editprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
  name: string;
  username: string;
  email: string;
  user: {username?: string, name?: string, email?: string, address?:string,phone_number?:number,user_id?:string} = {};
    submitted = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: Http,
              public userDataProvider:UserDataProvider,
              public loadCtrl: LoadingController) {}

  ngAfterViewInit() {
                this.getUsername();
                this.getName();
                this.getEmail();
                this.getID();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

getUsername() {
    this.userDataProvider.getUsername().then((username) => {
      this.user.username = username;
    });
  }

  getName() {
    this.userDataProvider.getName().then((username) => {
      this.user.name = username;
    });
  }

  getEmail() {
    this.userDataProvider.getEmail().then((username) => {
      this.user.email = username;
    });
  }

  getID() {
      this.userDataProvider.getID().then((username) => {
        this.user.user_id = username;
      });
    }  

  onSignup(form: NgForm) {
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });

    if (form.valid) {
      loading.present();
      let input = JSON.stringify({
        username: this.user.username,
        name: this.user.name,
        email: this.user.email,
        address: this.user.address,
        phone_number: this.user.phone_number,
        user_id:this.user.user_id
      });
      this.http.post("localhost/cobaapp1/projeks/edit_profil.php",input).subscribe(data => {
           loading.dismiss();
           console.log(input);
           let response = data.json();
           if(response.status == 200){
             let user=response.data;
             this.userDataProvider.signup(user.username);
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
