import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntryDetailPage } from '../entry-detail/entry-detail';
import { Entry } from '../../model/entry';
import { EntryDataServiceProvider } from '../../providers/entry-data-service/entry-data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private entries: Entry[] = [];

  constructor(public navCtrl: NavController, private entryService: EntryDataServiceProvider) {
    //this.entryService.getObservable().sunscribe
    this.entryService.getObservable().subscribe(update => {
      this.entries = entryService.getEntries();
      let sorted = this.entries.sort(function(a, b) {
          if(a.time > b.time) {
            return -1;
          } else {
            return 1;
          }
        })
      this.entries = sorted;
      //console.log(this.entries);
    });
    this.entries = entryService.getEntries();
    let sorted = this.entries.sort(function(a, b) {
        if(a.time > b.time) {
          return -1;
        } else {
          return 1;
        }
      })
    this.entries = sorted;
  }


  private addEntry() {
    this.navCtrl.push(EntryDetailPage);
  }

  private editEntry(entryID: number) {
    console.log("editing entry ", entryID);
    this.navCtrl.push(EntryDetailPage, {"entryID": entryID});
  }

  private deleteEntry(entryID: number) {
    this.entryService.removeEntry(entryID);
  }
}
