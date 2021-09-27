import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-heros',
    templateUrl: './heros.component.html',
    styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
    heros: Hero[] = [];

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes) => (this.heros = heroes));
    }

    constructor(
        private heroService: HeroService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.getHeroes();
    }
}
