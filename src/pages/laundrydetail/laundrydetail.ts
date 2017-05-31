import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http'; 
import { HistoryPage } from '../history/history';
import { HargaPage } from '../harga/harga';
import { UserDataProvider } from '../../provider/user-data';

/*
  Generated class for the Laundrydetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-laundrydetail',
  templateUrl: 'laundrydetail.html'
})
export class LaundrydetailPage {
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
  users:{user_id?:number} ={}
  data: {opsi?:number} = {};
  item: {id_pelaundry?:number} = {};
    submitted = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public toastCtrl: ToastController,
              public http: Http,
              public loadCtrl: LoadingController,
              public userDataProvider:UserDataProvider) {
                
                let item = this.navParams.data;
                this.id_pelaundry = item.id_pelaundry;
                this.NamaToko = item.NamaToko;
                this.Alamat = item.Alamat;
                this.Deskripsi = item.Deskripsi;
                this.Foto = item.Foto;
                this.harga_limajam = item.harga_limajam;
                this.harga_satuhari = item.harga_satuhari;
                this.harga_duahari = item.harga_duahari;
                this.harga_tigahari = item.harga_tigahari;
                this.harga_empathari = item.harga_empathari;
                
                console.log(item);
              }
  
  ngAfterViewInit() {
                this.getidpelaundry();
                this.getUserID();
                //this.gethargalimajam();
                //this.gethargasatuhari();
                //this.gethargaduahari();
                //this.gethargatigahari();
  }

  getidpelaundry() {
    this.userDataProvider.getidpelaundry().then((id_pelaundry) => {
      this.item.id_pelaundry = id_pelaundry;
    });
  }

  getUserID() {
    this.userDataProvider.getID().then((username) => {
      this.users.user_id = username;
    });
  }
              
  launchHargaPage(){
    this.navCtrl.push(HargaPage);
  }

  launchHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }

  getHarga(item){
    this.navCtrl.push(HargaPage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaundrydetailPage');
  }

  transaksi(form: NgForm) {
                this.submitted = true;
                let loading = this.loadCtrl.create({
                    content: 'Tunggu sebentar...'
                });

                if (form.valid) {
                  loading.present();
                  let input = JSON.stringify({
                    opsi: this.data.opsi
                  });
                  this.http.post("http://localhost/cobaapp1/projeks/add_item.php?user_id="+this.users.user_id+"&id_pelaundry="+this.item.id_pelaundry,input).subscribe(data => {
           loading.dismiss();
           console.log(input);
           let response = data.json();
           if(response.status == 200){
              this.navCtrl.push(HargaPage);
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

  
