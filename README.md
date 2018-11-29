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

## 2️⃣ Master Details Pattern 
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
 
## 3️⃣ Promises, Observer and Observables 
### Module: Observer and Observables 
### Source1: lab-6-whack-a-mole
https://paper.dropbox.com/doc/Understanding-Callbacks-Promises-and-Observables-without-a-CS-Degree--ASGXPQhX7sBOdq6hPVidYGXGAg-QKFXgYuGQeluvkAlh6cw1
1. Timestamps
2. Promise
3. Score sorting
4. Images display
5. Dynamic UI
https://umich.instructure.com/courses/235244/files/8875862/download?verifier=7me7augihHgnkDRKTOohAsWX2GDdyuYwWEjqkQwl&wrap=1

## 4️⃣ Native Integration 
### Module: Camera, emulator, Ionic Native App 
### Source1: lab-7-native-integration
- https://paper.dropbox.com/doc/Going-Native-with-Ionic-3-Ionic-Native-and-Cordova--ASGakOVNPHEF2DOE0z4Ad_iNAg-20tY5KivpJnNNnSXfNdec
- https://vimeo.com/298460004

## 5️⃣ CURD & Storage
### Module: Storage
### Source1: CRUD
- https://paper.dropbox.com/doc/Week-8-CRUD--ASEWNEHJtO7nJqlwlIabIQJ6Ag-sndIVll1DZcLad9sFm4uV
- All  https://vimeo.com/300637980

Create Read Update Delete

Creating the  EntryDataService
- We can ask Ionic to create a (service) Provider for us using the `generate`  (or `g` for short) command.
    - $ ionic g provider entry-data-service

This will do a few things for us:
1. Create a new folder in `src` called `providers`
2. Create a new subdirectory called `entry-data-service` that contains a single file called entry-data-service.ts
3. Define the class `EntryDataServiceProvider` inside entry-data-service.ts, and attach the `@Injectable` decorator to it.

You will need to do the rest, which includes:
1. importing `EntryDataServiceProvider` into app.module.ts.
2. Adding `EntryDataServiceProvider` to the `providers:` array in app.module.ts
3. Importing `EntryDataServiceProvider` into home.ts and entry-detail.ts.
4. Adding a parameter of type  `EntryDataServiceProvider` to the constructors for HomePage and EntryDetailPage.

Now that everything is in place, we can start to implement the service.


## 6️⃣ Firebase
### Module: firebase + install firebase
### Source1: simple_firebase
- https://paper.dropbox.com/doc/Week-10-FireBase-Agile-Development--ASFHNv7muxB9ArxO6~aCe_iiAg-jamWcjDIH2ryoOGSmAWKx

## 7️⃣ Notification
### Source 
https://github.com/JaneYum/cordova-plugin-local-notifications

## 8️⃣ UI
- dynamic
[hidden]="todos &amp;&amp; todos.length &gt; 0”
- For icon
https://beta.ionicframework.com/docs/layout/css-utilities <ion-icon slot="icon-only" name="add-circle"></ion-icon>
-Here are some pointers that you may find useful:

- Adding a background image:
https://www.w3schools.com/cssref/pr_background-image.asp 
(image from https://www.toptal.com/designers/subtlepatterns/ 
- Using cards:
https://ionicframework.com/docs/components/#cards 
- Using icons for buttons:
https://ionicframework.com/docs/components/#icon-buttons 
https://ionicframework.com/docs/ionicons/ 
- Using a floating button:
https://ionicframework.com/docs/components/#fabs 
- Styling the input field:
https://ionicframework.com/docs/components/#stacked-labels 
- Modifying the color palette and changing the color of the cancel button.
see week 11 lecture notes
- Positioning buttons to the right:
https://ionicframework.com/docs/theming/css-utilities/
