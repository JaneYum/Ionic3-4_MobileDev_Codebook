# Ionic3-4_MobileDev_Codebook
## Start code
- you get an ionic 3 project, using ionic 3 routing
$ ionic start myProject blank
- you get an ionic 4 project, using angular routing
$ ionic start myProject blank --type=angular

- Preview
$ ionic serve vs ionic lab

- Generate page
$ ionic generate
$ ionic g page detail

- Generate service
$ ng generate service checklist

- Template language comes from Angular
    * *ngFor
    * {{ item }}
    * (click)
    * [(banana_in_a_box)]


## 1️⃣ Navigation 
### Module: Router or NavCtrl
### Source1: week4lecture
### Source2: navSpike
1. constructor(public router: Router, public navCtrl: NavController ) {}
2. onClick() {this.router.navigateByUrl('/about');}
3. onClickUsingNavCtrl() { this.navCtrl.navigateForward('/about'); /// another form of navigation!}
4. gotoSettings(){ this.navCtrl.navigateForward('/settings'); /// another form of navigation!}
5. Pass Data between pages while navigating - paramter: { path: 'pageTwo/:name', loadChildren...}

## 2️⃣ Service 
### Module: ?
### Source1: serviceSpike

## 3️⃣ Master Details Pattern 
### Module: ?
### Source1: heroSpike
https://paper.dropbox.com/doc/Week-5-Models-Navigation-Params-Injectables-Services-and-the-MasterDetail-Pattern--AOZa0DrVMUmst1LjFOTF6fxVAQ-BdmKIzZI01N81QsU07gKS
- Hero
  - Name
  - Powers
  - functions to retrieve and modify these
- HeroManager
  - The list of Heroes
  - functions to get all Heroes, add Heroes, remove Heroes
 
## 4️⃣ Promises, Observer and Observables 
### Module: Observer and Observables 
### Source1: lab-6-whack-a-mole
https://paper.dropbox.com/doc/Understanding-Callbacks-Promises-and-Observables-without-a-CS-Degree--ASGXPQhX7sBOdq6hPVidYGXGAg-QKFXgYuGQeluvkAlh6cw1
1. Timestamps
2. Promise
3. Score sorting
4. Images display
5. Dynamic UI
https://umich.instructure.com/courses/235244/files/8875862/download?verifier=7me7augihHgnkDRKTOohAsWX2GDdyuYwWEjqkQwl&wrap=1

## 5️⃣ Native Integration 
### Module: Camera, emulator, Ionic Native App 
### Source1: lab-7-native-integration
- https://paper.dropbox.com/doc/Going-Native-with-Ionic-3-Ionic-Native-and-Cordova--ASGakOVNPHEF2DOE0z4Ad_iNAg-20tY5KivpJnNNnSXfNdec
- https://vimeo.com/298460004

## 1️⃣ UI
- dynamic
[hidden]="todos &amp;&amp; todos.length &gt; 0”
- For icon
https://beta.ionicframework.com/docs/layout/css-utilities <ion-icon slot="icon-only" name="add-circle"></ion-icon>
