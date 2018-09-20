import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
	 public homePage = HomePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	clickIntroButton(){
  	this.navCtrl.setRoot(this.homePage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');


  }

}
