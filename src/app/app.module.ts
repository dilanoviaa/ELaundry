import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DaftarPage } from '../pages/about/about';
import { MasukPage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { BerandaPage } from '../pages/beranda/beranda';
import { NavController,ToastController,LoadingController, NavParams  } from 'ionic-angular';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { UserDataProvider } from '../provider/user-data';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HistoryPage } from '../pages/history/history';
import { AccountPage } from '../pages/account/account';
import { LaundrydetailPage } from '../pages/laundrydetail/laundrydetail';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { EditpasswordPage } from '../pages/editpassword/editpassword';
import { ReviewPage } from '../pages/review/review';
import { TentangPage } from '../pages/tentang/tentang';
import { SearchPage } from '../pages/search/search';
import { HargaPage } from '../pages/harga/harga';

@NgModule({
  declarations: [
    MyApp,
    DaftarPage,
    MasukPage,
    TabsPage,
    WelcomePage,
    BerandaPage,
    HistoryPage,
    AccountPage,
    LaundrydetailPage,
    EditprofilePage,
    EditpasswordPage,
    ReviewPage,
    TentangPage,
    SearchPage,
    HargaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DaftarPage,
    MasukPage,
    TabsPage,
    WelcomePage,
    BerandaPage,
    HistoryPage,
    AccountPage,
    LaundrydetailPage,
    EditprofilePage,
    EditpasswordPage,
    ReviewPage,
    TentangPage,
    SearchPage,
    HargaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    Storage
  ]
})
export class AppModule {}
