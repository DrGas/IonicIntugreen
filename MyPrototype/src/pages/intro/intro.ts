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
      description: "To use our adventure map, we need the power of the phone's GPS. Ask your parents for help, give access to BySafari and get ready for an adventure!",
      image: "../assets/imgs/bysafari_larry_intro.png",
    },
    {
      title: "Explore and <br> Be Safe?",
      description: "Please be careful as you explore with your map.  Look both ways when you cross the road, and make sure your shoes are tied!",
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

