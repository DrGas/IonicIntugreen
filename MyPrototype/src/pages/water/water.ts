import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the WaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-water',
  templateUrl: 'water.html',
})
export class WaterPage {
	homePage = HomePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHome(){
  	this.navCtrl.setRoot(this.homePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterPage');
  }

}
