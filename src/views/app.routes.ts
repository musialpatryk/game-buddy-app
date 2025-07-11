import { Routes } from '@angular/router';
import { GAME_MANAGEMENT_ROUTES } from './games/game-management.routes';

export const routes: Routes = [
  {
    path: 'games',
    children: GAME_MANAGEMENT_ROUTES,
  },
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full',
  },
];
