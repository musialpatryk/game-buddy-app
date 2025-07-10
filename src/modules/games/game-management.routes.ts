import { Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';

export const GAME_MANAGEMENT_ROUTES: Routes = [
  {
    path: 'add',
    component: AddGameComponent,
  },
];
