import { Routes } from '@angular/router';
import { GameViewComponent } from './games-view/games-view.component';

export const GAME_MANAGEMENT_ROUTES: Routes = [
  {
    path: '',
    component: GameViewComponent,
  },
];
