import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Entry } from '../../model/entry';
import { HomePage } from '../home/home';
import { EntryDataServiceProvider } from '../../providers/entry-data-service/entry-data-service';

/**
 * Generated class for the EntryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entry-detail',
  templateUrl: 'entry-detail.html',
})

export class EntryDetailPage {
  private entry: Entry;

  constructor(public navCtrl: NavController, public navParams: NavParams,private entryService: EntryDataServiceProvider) {
    let entryID = this.navParams.get("entryID");
    if (entryID === undefined) {
        this.entry = new Entry();
        this.entry.title = "";
        this.entry.text = "";
        this.entry.id = -1; // placeholder for 'temporary' entry
        this.entry.time = Date.now();
      } else {
        this.entry = this.entryService.getEntryByID(entryID);
    }
  }

  private saveEntry() {
    if (this.entry.id === -1) {
      this.entryService.addEntry(this.entry);
    } else {
      this.entryService.updateEntry(this.entry.id, this.entry);
    }
    this.navCtrl.pop();
  }
  private cancelchange(){
    this.navCtrl.pop();
  }

}
