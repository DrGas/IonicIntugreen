import { HomePage } from '../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

slides = [
    {
      title: "Welcome to <br> Bysafari!",
      description: "Your Urban StoryTelling Guide <br>to explore the world the green world around you.  ",
      image: "../assets/imgs/bysafari_larry_intro.png",
    },
    {
      title: "We Need your <br> GPS HELP?",
      description: "We need the power of the phone's GPS. Ask your parents for help!",
      image: "../assets/imgs/bysafari_larry_intro.png",
    },
    {
      title: "Explore and <br> Be Safe?",
      description: "Please be careful as you explore with your BySafari. Look both ways when you cross the road!",
      image: "../assets/imgs/bysafari_larry_intro.png",
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	clickIntroButton(){
  	this.navCtrl.setRoot(this.homePage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');


  }

}

