import { Component, DestroyRef, inject } from '@angular/core';
import { GamesModule } from '../../modules/games/games.module';
import { MatButton } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AddGameComponent } from '../../modules/games/components/add-game/add-game.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'game-view',
  standalone: true,
  imports: [GamesModule, MatButton, MatBottomSheetModule],
  templateUrl: './games-view.component.html',
})
export class GameViewComponent {
  private bottomSheet = inject(MatBottomSheet);
  private destroyRef = inject(DestroyRef);

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(AddGameComponent);
    if (bottomSheetRef) {
      bottomSheetRef.instance.close
        .pipe(
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe(() => bottomSheetRef.dismiss());
    }
  }
}
