import { Injectable }           from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { filter, tap }          from 'rxjs/operators';

import { Hero }   from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() : Observable<Hero[]> {
    return of( HEROES );
  }

  getHero(id : number) : Observable<Hero> {
    return from( HEROES )
            .pipe(
               filter( (hero : Hero) => hero.id == id )
            );
  }

  constructor() { }
}
