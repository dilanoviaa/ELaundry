import { Component } from '@angular/core';
import { BerandaPage} from '../beranda/beranda';
import { HistoryPage} from '../history/history';
import { AccountPage} from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BerandaPage;
  tab2Root = HistoryPage;
  tab3Root = AccountPage;
  constructor() {

  }
}
