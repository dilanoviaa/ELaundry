import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Http } from '@angular/http';


@Injectable()
export class UserDataProvider {
  _favorites = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  public loginState = false;
  public token;
  public ids;
  public input: string;
  public jwt: any;
  public out;

  constructor(public events: Events, public storage: Storage, public http: Http) {}

  hasFavorite(sessionName) {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName) {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName) {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }



  setId(user_id) {
    this.storage.set('user_id', user_id);
  }

  login(user_id,username,name,tanggallahir,email,password,address,phone_number) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('user_id', user_id);
    this.storage.set('username', username);
    this.storage.set('name',name);
    this.storage.set('tanggallahir',tanggallahir);
    this.storage.set('email',email);
    this.storage.set('password',password);
    this.storage.set('address',address);
    this.storage.set('phone_number',phone_number);
    this.events.publish('user:login');
    this.loginState = true;
  }

  pelaundry(id_pelaundry,NamaToko,Alamat,Deskripsi,Foto,harga_limajam,harga_satuhari,harga_duahari,harga_tigahari,harga_empathari) {
    this.storage.set('id_pelaundry', id_pelaundry);
    this.storage.set('NamaToko', NamaToko);
    this.storage.set('Alamat', Alamat);
    this.storage.set('Deskripsi', Deskripsi);
    this.storage.set('Foto', Foto);
    this.storage.set('harga_limajam', harga_limajam);
    this.storage.set('harga_satuhari', harga_satuhari);
    this.storage.set('harga_duahari', harga_duahari);
    this.storage.set('harga_tigahari', harga_tigahari);
    this.storage.set('harga_empathari', harga_empathari)
  }

  signup(username) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('username',username);
    this.events.publish('user:signup');
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('user_id');
    this.storage.remove('username');
    this.storage.remove('tanggallahir');
    this.storage.remove('phone_number');
    this.storage.remove('email');
    this.storage.remove('name');
    this.storage.remove('address');
    this.storage.remove('password');
    this.storage.remove('token');
    this.events.publish('user:logout');
    this.loginState = false;
    // location.reload();
  }

  getID() {
     return this.storage.get('user_id').then((res) => {
        this.ids = res;
        return this.ids;
     });
  }
  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }
  getName() {
    return this.storage.get('name').then((value) => {
      return value;
    });
  }
  getEmail() {
    return this.storage.get('email').then((value) => {
      return value;
    });
  }
  getPhoneNumber() {
    return this.storage.get('phone_number').then((value) => {
      return value;
    });
  }

  getPassword() {
    return this.storage.get('password').then((value) => {
      return value;
    });
  }

  getAddress() {
    return this.storage.get('address').then((value) => {
      return value;
    });
  }

  getidpelaundry() {
    return this.storage.get('id_pelaundry').then((value) => {
      return value;
    });
  }

  getnamatoko() {
    return this.storage.get('NamaToko').then((value) => {
      return value;
    });
  }

  getalamat() {
    return this.storage.get('Alamat').then((value) => {
      return value;
    });
  }

  getdeskripsi() {
    return this.storage.get('Deskripsi').then((value) => {
      return value;
    });
  }

  getfoto() {
    return this.storage.get('Foto').then((value) => {
      return value;
    });
  }

  gethargalimajam() {
    return this.storage.get('harga_limajam').then((value) => {
      return value;
    });
  }

  gethargasatuhari() {
    return this.storage.get('harga_satuhari').then((value) => {
      return value;
    });
  }

  gethargaduahari() {
    return this.storage.get('harga_duahari').then((value) => {
      return value;
    });
  }

  gethargatigahari() {
    return this.storage.get('harga_tigahari').then((value) => {
      return value;
    });
  }

  gethargaempathari() {
    return this.storage.get('harga_empathari').then((value) => {
      return value;
    });
  }
  

  // return a promise
  // hasLoggedIn(val = this.getToken()) {
  //   this.jwt = val;
  //   this.input = JSON.stringify({jwtToken: this.jwt});

  //   this.http.post('http://cybex.ipb.ac.id/test/check.php', this.input).subscribe((ret) => {
  //     this.out = ret.json();
  //     if(this.out.status){
  //       this.loginState = true;
  //     }else{
  //       this.loginState = false;
  //     }
  //   });
  // }
}