import { Component } from '@angular/core';
import {  Hero } from '../data/hero'
import {  hero } from '../data/data'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  hero!: Hero;

  constructor() { }

  ngOnInit(): void { 
    this.hero = hero;
  }
  
}
