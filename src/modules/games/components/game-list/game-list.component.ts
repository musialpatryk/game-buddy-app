import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRepository } from '../../repositories/games/game-repository.service';
import { GameComponent } from '../game/game.component';
import { Observable, startWith } from 'rxjs';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IGame } from '../../repositories/games/game.interface';

@Component({
  selector: 'game-list',
  standalone: true,
  imports: [CommonModule, GameComponent, MatProgressSpinner],
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit {
  @Input() userId?: number;

  allGames$!: Observable<IGame[] | null>;

  private destroyRef = inject(DestroyRef);
  private gameRepository = inject(GameRepository);

  ngOnInit(): void {
    this.allGames$ = this.gameRepository
      .getAll(this.userId)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        startWith(null)
      );
  }
}
