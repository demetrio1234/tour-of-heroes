import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { RouterModule } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  url: string = 'dashboard/'

  heroes: Hero[] = [];

  substriptionToHeroService?: Subscription

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {

    this.substriptionToHeroService = this.heroService.getHeroes().subscribe(heroes => { this.heroes = heroes; console.log('test subscription') });
    this.heroes = this.heroes.slice(1, 5)
  }

  ngOnDestroy(): void {
    this.substriptionToHeroService?.unsubscribe();
    console.log(this.substriptionToHeroService?.closed)
  }

}
