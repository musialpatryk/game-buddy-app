import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRepository } from '../../repositories/games/game-repository.service';
import { GameComponent } from '../game/game.component';
import { startWith } from 'rxjs';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'game-list',
  standalone: true,
  imports: [CommonModule, GameComponent, MatProgressSpinner],
  templateUrl: './game-list.component.html',
})
export class GameListComponent {
  allGames$ = inject(GameRepository)
    .getAll()
    .pipe(
      takeUntilDestroyed(),
      startWith(null)
    );
}
