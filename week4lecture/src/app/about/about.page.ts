import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public router: Router, public navCtrl: NavController ) {
  }
  onClick() {
    this.router.navigateByUrl('/home');
  }
  onClickUsingNavCtrl() {
    this.navCtrl.navigateBack('/home'); /// another form of navigation!
  }
  ngOnInit(){

  }

}
