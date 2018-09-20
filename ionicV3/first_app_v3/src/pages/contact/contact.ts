import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { PeopleDataProvider } from '../../providers/people-data/people-data';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [PeopleDataProvider],
})
export class ContactPage {
	public people = new Array();
	private detailPage;

  constructor(public navCtrl: NavController, public peopleData:PeopleDataProvider) {
	peopleData.getPeople().subscribe(people =>{
		console.log('people', people);
		this.people = people;
	})


  	  	this.detailPage = DetailPage;

  }


  loadDetail(person){
  	console.log(person);
  	this.navCtrl.push(this.detailPage, {person:person.id});
  }
}
