import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PeopleDataProvider Provider');
  }

  getPeople() {
     return this.http.get('https://randomuser.me/api/?results=10&nat=us&seed=d07ade5f51ff3011')
    .map(res => res.json())
    .map(res => res.results);
  }
}
