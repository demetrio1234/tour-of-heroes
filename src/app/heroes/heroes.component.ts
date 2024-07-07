import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  isHeroSelected: boolean = false;
  isSelected?: Hero;

  onSelect(selectedHero: Hero): void {
    //this.isSelected = selectedHero;

    this.isHeroSelected = !this.isHeroSelected;
    selectedHero.hide = !selectedHero.hide;
  }

  heroes: Hero[] = HEROES;
}
