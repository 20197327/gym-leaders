import { Component } from '@angular/core';
import { LeaderInfo} from '../leader-info/leader-info';
import { GymLeader } from '../models/gym-leader.model';

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto-region.component.html',
  styleUrl: './kanto-region.component.css'
})
export class KantoRegionComponent {
  leaders: GymLeader[] = [
    {
      photo : 'brock.png',
      name: 'Brock',
      age: 15,
      location: 'Pewter City Gym',
      pokemonTeam: 'Geodude (Lv. 12), Onix (Lv. 14)',
      badge: 'Boulder Badge',
      monologue: 'A hard-headed Rock-type trainer who believes brains beat brawn in a real Pokemon battle.'
    },
    {
      photo: 'misty.png',
      name: 'Misty',
      age: 14,
      location: 'Cerulean City Gym',
      pokemonTeam: 'Staryu (Lv. 18), Starmie (Lv. 21)',
      badge: 'Cascade Badge',
      monologue: 'The self-proclaimed "Tomboyish Mermaid" who trains Water-type Pokemon with fierce pride.'
    },
    {
      photo: 'lt-surge.png',
      name: 'Lt. Surge',
      age: 32,
      location: 'Vermilion City Gym',
      pokemonTeam: 'Voltorb (Lv. 21), Pikachu (Lv. 18), Raichu (Lv. 24)',
      badge: 'Thunder Badge',
      monologue: 'A battle-hardened veteran known as "The Lightning American" who swears by Electric-type power.'
    },
    {
      photo: "erika.png",
      name: 'Erika',
      age: 24,
      location: 'Celadon City Gym',
      pokemonTeam: 'Victreebel (Lv. 29), Tangela (Lv. 24), Vileplume (Lv. 29)',
      badge: 'Rainbow Badge',
      monologue: 'A graceful and refined Grass-type user who tends the gym like a serene garden.'
    },
    {
      photo: 'koga.png',
      name: 'Koga',
      age: 40,
      location: 'Fuchsia City Gym',
      pokemonTeam: 'Koffing (Lv. 37), Muk (Lv. 39), Koffing (Lv. 37), Weezing (Lv. 43)',
      badge: 'Soul Badge',
      monologue: 'A cunning Ninja Master who fights with Poison-type Pokemon and clever misdirection.'
    },
    {
      photo:"sabrina.png",
      name: 'Sabrina',
      age: 22,
      location: 'Saffron City Gym',
      pokemonTeam: 'Kadabra (Lv. 38), Mr. Mime (Lv. 37), Venomoth (Lv. 38), Alakazam (Lv. 43)',
      badge: 'Marsh Badge',
      monologue: 'A stoic Psychic-type master with powerful ESP abilities said to have teleported her entire gym.'
    },
    {
      photo: "blaine.png",
      name: 'Blaine',
      age: 60,
      location: 'Cinnabar Island Gym',
      pokemonTeam: 'Growlithe (Lv. 42), Ponyta (Lv. 40), Rapidash (Lv. 42), Arcanine (Lv. 47)',
      badge: 'Volcano Badge',
      monologue: 'A fiery quiz-loving scientist who tests challengers with riddles before letting them battle.'
    },
    {
      photo: "giovanni.png",
      name: 'Giovanni',
      age: 45,
      location: 'Viridian City Gym',
      pokemonTeam: 'Rhyhorn (Lv. 45), Dugtrio (Lv. 42), Nidoqueen (Lv. 44), Nidoking (Lv. 45), Rhydon (Lv. 50)',
      badge: 'Earth Badge',
      monologue: 'The secretive final Kanto Gym Leader, a Ground-type master and true leader of Team Rocket.'
    }
  ];
}
