import { Component, DestroyRef, inject, Input } from '@angular/core';
import { GamesModule } from '../../modules/games/games.module';
import { MatButton } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AddGameComponent } from '../../modules/games/components/add-game/add-game.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GameListComponent } from '../../modules/games/components/game-list/game-list.component';
import { IUser } from '../../modules/games/repositories/users/user.interface';

@Component({
  selector: 'collection-view',
  standalone: true,
  templateUrl: './collection-view.component.html',
  imports: [
    GameListComponent
  ]
})
export class CollectionView {
  @Input() user?: IUser;
}
