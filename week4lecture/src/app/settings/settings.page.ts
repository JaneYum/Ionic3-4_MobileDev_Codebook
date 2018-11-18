import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  firstName: string = "";
  lastName: string = "";

  constructor(public router: Router, public navCtrl: NavController ) {
    this.firstName = localStorage.getItem("firstName");
    this.lastName = localStorage.getItem("lastName");

  }

  ngOnInit() {
  }

  gobackhome(){
    this.navCtrl.navigateBack('/home'); /// another form of navigation!
  }

  saveData(){
    localStorage.setItem('firstName', this.firstName);
    localStorage.setItem('lastName', this.lastName);
  }

}
