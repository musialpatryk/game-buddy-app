import { Routes } from '@angular/router';
import { GameComponent } from '../modules/games/components/game/game.component';
import { GameRepository } from '../modules/games/repositories/games/game-repository.service';
import { GamesView } from './games-view/games-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CollectionView } from './collection-view/collection-view.component';
import { UserRepository } from '../modules/games/repositories/users/user-repository.service';

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
        component: GamesView,
      },
    ],
  },
  {
    path: 'collection',
    children: [
      {
        path: ':id',
        component: CollectionView,
        resolve: {
          user: UserRepository,
        }
      },
      {
        path: '',
        component: CollectionView,
        resolve: {
          user: UserRepository,
        }
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/games',
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
