import {Injectable, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {Hero} from './hero';

@Injectable()
export class HeroService implements OnInit {

  private heroes: Hero[];

  constructor(private _http:Http) {
    _http.get('app/heroes.json')
      // Call map on the response observable to get the parsed people object
      //.map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(res => {
        console.log(res.json());
        this.heroes = res.json();
      });
  }

  ngOnInit() {
    this.fetchHeroes();
  }

  getHero(id: number) {
    return Promise.resolve(this.heroes)
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  getHeroes() {
    return this.heroes;
  }

  fetchHeroes() {
    this._http.get('app/heroes.json')
      // Call map on the response observable to get the parsed people object
      //.map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(res => {
        console.log(res.json());
        this.heroes = res.json();
      });
  }
}
