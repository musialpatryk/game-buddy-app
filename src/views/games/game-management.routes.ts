import { Routes } from '@angular/router';
import { AddGameComponent } from '../../modules/games/components/add-game/add-game.component';
import { GameViewComponent } from './games-view/games-view.component';

export const GAME_MANAGEMENT_ROUTES: Routes = [
  {
    path: 'add',
    component: GameViewComponent,
  },
];
