import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero }        from '../hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes : Hero[];
  selectedHero : Hero;

  constructor(
    private heroService : HeroService
  ) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(
      heroes =>  {
        this.heroes = heroes;
        this.selectedHero = heroes[0];
      }
    )
  }

  onClickHero(hero) {
    this.selectedHero = hero;
  }

}
