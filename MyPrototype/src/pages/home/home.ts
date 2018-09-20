import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BirdPage } from '../bird/bird';
import { BeePage } from '../bee/bee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public birdPage = BirdPage;
	public beePage = BeePage;

  constructor(public navCtrl: NavController) {

  }

	goBird(){
		this.navCtrl.setRoot(this.birdPage);
	}

	goBee(){
		this.navCtrl.setRoot(this.beePage);

	}
}
