import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { TentangPage } from '../tentang/tentang';
import { ReviewPage } from '../review/review';
import { EditprofilePage} from '../editprofile/editprofile';
import { EditpasswordPage} from '../editpassword/editpassword';
import { UserDataProvider } from '../../provider/user-data';

/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  name: string;

  constructor(public userDataProvider:UserDataProvider,public alertCtrl: AlertController, public nav: NavController, public userData: UserDataProvider) {}

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
ngAfterViewInit() {
    this.getName();
  }
  getName() {
    this.userData.getName().then((username) => {
      this.name = username;
    });
  }
  launchWelcomePage(){
    this.nav.push(WelcomePage);
    this.userDataProvider.logout();
    window.location.reload();
  }

  openNavTentangPage() {
    this.nav.push(TentangPage);
  }

launchReviewPage(){
    this.nav.push(ReviewPage);
  }

launchEditprofilePage(){
    this.nav.push(EditprofilePage);
  }

launchEditpasswordPage(){
    this.nav.push(EditpasswordPage);
  }

  
}