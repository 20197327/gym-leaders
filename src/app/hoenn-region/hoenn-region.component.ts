import { Component, inject } from '@angular/core';
import { TrainerService } from '../trainer-service';
import { LeaderInfo } from '../leader-info/leader-info'; // adjust path to match yours

@Component({
  imports: [LeaderInfo],
  selector: 'app-hoenn-region.component',
  styleUrl: './hoenn-region.component.css',
  templateUrl: './hoenn-region.component.html',
})
export class HoennRegionComponent {
  trainerService = inject(TrainerService);
}