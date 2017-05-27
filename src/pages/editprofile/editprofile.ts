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
  password: string;
  user_id: number;
  address: string;
  phone_number: number;
  users: {password?: string, username?: string, name?: string, email?: string, address?:string,phone_number?:number,user_id?:number} = {};
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
                this.getPassword();
                this.getAddress();
                this.getPhoneNumber();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

getUsername() {
    this.userDataProvider.getUsername().then((username) => {
      this.users.username = username;
    });
  }

  getName() {
    this.userDataProvider.getName().then((username) => {
      this.users.name = username;
    });
  }

  getEmail() {
    this.userDataProvider.getEmail().then((username) => {
      this.users.email = username;
    });
  }

  getPassword() {
      this.userDataProvider.getPassword().then((username) => {
        this.users.password = username;
      });
    }

    getAddress() {
      this.userDataProvider.getAddress().then((username) => {
        this.users.address = username;
      });
    }

     getPhoneNumber() {
      this.userDataProvider.getPhoneNumber().then((username) => {
        this.users.phone_number = username;
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
        username: this.users.username,
        name: this.users.name,
        email: this.users.email,
        address: this.users.address,
        phone_number: this.users.phone_number,
      });
      this.http.post("http://localhost/cobaapp1/projeks/edit_profil.php?user_id="+this.users.user_id,input).subscribe(data => {
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

