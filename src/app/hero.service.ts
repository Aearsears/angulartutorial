import { Injectable } from '@angular/core';
import { Hero } from './heros/hero';
import { HEROES } from './heros/mockheros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private messageService: MessageService) {}
    getHeroes(): Observable<Hero[]> {
        const heros = of(HEROES);
        this.messageService.add('HeroService: fetched heroes.');
        return heros;
    }
    getHero(id: number): Observable<Hero> {
        const heros = HEROES.find((h) => h.id === id)!;
        this.messageService.add(`HeroService: fetched hero id ${id}.`);
        return of(heros);
    }
}
