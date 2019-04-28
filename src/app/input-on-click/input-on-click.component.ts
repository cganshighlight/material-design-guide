import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  template: ''
    
  
})
export class InputOnClickComponent {
  heroes = [];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
