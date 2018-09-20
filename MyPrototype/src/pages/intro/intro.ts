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
      title: "Welcome to Bysafari!",
      description: "Your Urban StoryTelling Guide to explore the world around you ",
      image: "../assets/imgs/bysafari_larry_intro.png",
    },
    {
      title: "We Need your GPS HELP?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../assets/imgs/bysafari_larry_intro.png",
    },
    {
      title: "Explore and Be Safe?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
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

