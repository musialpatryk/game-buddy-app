import { NgModule } from '@angular/core';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GameListComponent } from './components/game-list/game-list.component';

@NgModule({
  imports: [
    AddGameComponent,
    GameListComponent,
  ],
  exports: [
    AddGameComponent,
    GameListComponent,
  ],
})
export class GamesModule {}
