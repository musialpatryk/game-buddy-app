import { Routes } from '@angular/router';
import { GameComponent } from '../modules/games/components/game/game.component';
import { GameRepository } from '../modules/games/repositories/games/game-repository.service';
import { GameViewComponent } from './games-view/games-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'games',
    children: [
      {
        path: ':id',
        component: GameComponent,
        resolve: {
          game: GameRepository,
          showDetails: () => true,
        }
      },
      {
        path: '',
        component: GameViewComponent,
      },
    ],
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
