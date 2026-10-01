import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { KantoRegionComponent } from './kanto-region/kanto-region.component';
import { JohtoRegionComponent } from './johto-region/johto-region.component';
import { HoennRegionComponent } from './hoenn-region/hoenn-region.component';

export const routes: Routes = [
  // 1. Landing page (localhost:4200/home)
  { path: 'home', component: HomeComponent },

  // 2. Kanto Gym Leaders (localhost:4200/kanto)
  { path: 'kanto', component: KantoRegionComponent },

  // 3. Johto Gym Leaders (localhost:4200/johto)
  { path: 'johto', component: JohtoRegionComponent },

  // 4. Default redirect (localhost:4200/ -> redirects to Home)
  { path: '', redirectTo: 'home', pathMatch: 'full' },

   { path: 'hoenn', component: HoennRegionComponent }

];
