import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { GymLeader } from '../models/gym-leader.model';

@Component({
  selector: 'app-johto-region',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto-region.component.html',
  styleUrl: './johto-region.component.css'
})
export class JohtoRegionComponent {
  leaders: GymLeader[] = [
    {
      photo: "falkner.png",
      name: 'Falkner',
      age: 17,
      location: 'Violet City Gym',
      pokemonTeam: 'Pidgey (Lv. 9), Pidgeotto (Lv. 13)',
      badge: 'Zephyr Badge',
      monologue: 'A proud young Flying-type trainer who inherited the gym from his father and honors his bird-keeping legacy.'
    },
    {
      photo: "bugsy.png",
      name: 'Bugsy',
      age: 14,
      location: 'Azalea Town Gym',
      pokemonTeam: 'Metapod (Lv. 14), Kakuna (Lv. 14), Scyther (Lv. 16)',
      badge: 'Hive Badge',
      monologue: 'A precocious young Bug-type researcher who studies Pokemon as intently as he battles them.'
    },
    {
      photo: "whitney.png",
      name: 'Whitney',
      age: 19,
      location: 'Goldenrod City Gym',
      pokemonTeam: 'Clefairy (Lv. 18), Miltank (Lv. 20)',
      badge: 'Plain Badge',
      monologue: 'A cheerful Normal-type trainer whose upbeat attitude hides a Miltank that has ended many challengers\' runs.'
    },
    {
      photo: "morty.png",
      name: 'Morty',
      age: 24,
      location: 'Ecruteak City Gym',
      pokemonTeam: 'Gastly (Lv. 21), Haunter (Lv. 21), Haunter (Lv. 23), Gengar (Lv. 25)',
      badge: 'Fog Badge',
      monologue: 'A mystic Ghost-type master who claims he can see the legendary Pokemon once a challenger proves their strength.'
    },
    {
      photo: "chuck.png",
      name: 'Chuck',
      age: 32,
      location: 'Cianwood City Gym',
      pokemonTeam: 'Primeape (Lv. 27), Poliwrath (Lv. 30)',
      badge: 'Storm Badge',
      monologue: 'A boisterous Fighting-type martial artist who trains under waterfalls to build his strength.'
    },
    {
      photo: "jasmine.png",
      name: 'Jasmine',
      age: 20,
      location: 'Olivine City Gym',
      pokemonTeam: 'Magnemite (Lv. 30), Magnemite (Lv. 30), Steelix (Lv. 35)',
      badge: 'Mineral Badge',
      monologue: 'A gentle and devoted Steel-type trainer who cares deeply for her injured Ampharos guarding the lighthouse.'
    },
    {
      photo: "pryce.png",
      name: 'Pryce',
      age: 63,
      location: 'Mahogany Town Gym',
      pokemonTeam: 'Seel (Lv. 27), Dewgong (Lv. 29), Piloswine (Lv. 31)',
      badge: 'Glacier Badge',
      monologue: 'An elderly Ice-type master who teaches that raw power means nothing without experience and resolve.'
    },
    {
      photo: "clair.png",
      name: 'Clair',
      age: 26,
      location: 'Blackthorn City Gym',
      pokemonTeam: 'Dragonair (Lv. 37), Dragonair (Lv. 37), Kingdra (Lv. 40)',
      badge: 'Rising Badge',
      monologue: 'A fierce and prideful Dragon-type master, and cousin to the Indigo League Champion, who demands nothing less than excellence.'
    }
  ];
}
