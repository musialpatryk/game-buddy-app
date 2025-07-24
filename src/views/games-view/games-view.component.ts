import { Component, inject } from '@angular/core';
import { GamesModule } from '../../modules/games/games.module';
import { MatButton } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AddGameComponent } from '../../modules/games/components/add-game/add-game.component';

@Component({
  selector: 'game-view',
  standalone: true,
  imports: [GamesModule, MatButton, MatBottomSheetModule],
  templateUrl: './games-view.component.html',
})
export class GameViewComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(AddGameComponent);
  }
}
