# Ionic3-4_MobileDev_Codebook

## 1️⃣ Navigation 
### Module: Router or NavCtrl
### Source: week4lecture
1. constructor(public router: Router, public navCtrl: NavController ) {}
2. onClick() {this.router.navigateByUrl('/about');}
3. onClickUsingNavCtrl() { this.navCtrl.navigateForward('/about'); /// another form of navigation!}
4. gotoSettings(){ this.navCtrl.navigateForward('/settings'); /// another form of navigation!}

