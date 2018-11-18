# Ionic3-4_MobileDev_Codebook

## 1️⃣ Navigation 
### Module: Router or NavCtrl
### Source1: week4lecture
### Source2: navSpike
1. constructor(public router: Router, public navCtrl: NavController ) {}
2. onClick() {this.router.navigateByUrl('/about');}
3. onClickUsingNavCtrl() { this.navCtrl.navigateForward('/about'); /// another form of navigation!}
4. gotoSettings(){ this.navCtrl.navigateForward('/settings'); /// another form of navigation!}

5. paramter: { path: 'pageTwo/:name', loadChildren...}

## 2️⃣ Service 
### Module: ?
### Source1: serviceSpike

## 3️⃣ Master Details Pattern 
### Module: ?
### Source1: heroSpike
- Hero
  - Name
  - Powers
  - functions to retrieve and modify these
- HeroManager
  - The list of Heroes
  - functions to get all Heroes, add Heroes, remove Heroes
