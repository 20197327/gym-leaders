import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfo {
  photo = input<string>();
  name = input.required<string>();
  age = input<number>();
  location = input.required<string>();
  pokemonTeam = input.required<string>();
  badge = input.required<string>();
  monologue = input<string>();
  specialty =input<string>();


  showMonologue = signal(false);

  toggleMonologue(): void {
    this.showMonologue.update(current => !current);
  }
}
