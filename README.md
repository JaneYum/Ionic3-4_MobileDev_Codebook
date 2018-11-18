# Ionic3-4_MobileDev_Codebook

## 1️⃣Navigation 
### Module: Router or NavCtrl
### Source: week4lecture
constructor(public router: Router, public navCtrl: NavController ) {
  }
  onClick() {
    this.router.navigateByUrl('/about');
  }
  onClickUsingNavCtrl() {
    this.navCtrl.navigateForward('/about'); /// another form of navigation!
  }
  gotoSettings(){
    this.navCtrl.navigateForward('/settings'); /// another form of navigation!
  }
}
