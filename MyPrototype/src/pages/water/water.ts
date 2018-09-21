import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';

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
	videoOptions: VideoOptions;
	videoUrl: string;


  constructor(private videoPlayer: VideoPlayer, public navCtrl: NavController, public navParams: NavParams) {
  }

  goHome(){
  	this.navCtrl.setRoot(this.homePage);
  }

  async playVideo(){
  	try {
  		this.videoOptions = {
  			volume: 0.7,
  		}
  	this.videoUrl = "https://www.youtube.com/watch?v=kbMqWXnpXcA"	
  	this.videoPlayer.play(this.videoUrl, this.videoOptions);

  	}catch(e){
  		console.error(e);
  	}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterPage');
  }

}
