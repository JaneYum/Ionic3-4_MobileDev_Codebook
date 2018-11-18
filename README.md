# Ionic3-4_MobileDev_Codebook

## Navigation
### Router or NavCtrl
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
