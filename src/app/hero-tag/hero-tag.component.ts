import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-tag',
  templateUrl: './hero-tag.component.html',
  styleUrls: ['./hero-tag.component.css']
})
export class HeroTagComponent implements OnInit {
  @Input() hero: Hero;
  @Output() deleteHero = new EventEmitter<Hero>();

  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteHero.emit(this.hero);
  }

}
