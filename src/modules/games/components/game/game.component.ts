import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRepository } from '../../repositories/games/game-repository.service';
import { IGame } from '../../repositories/games/game.interface';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { GameDetailsRepository } from '../../repositories/game-details/game-repository.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, of, startWith } from 'rxjs';
import { IGameDetails } from '../../repositories/game-details/game-details.interface';
import { MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'game',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatCardTitle, MatCardFooter, MatChipSet, MatChip, MatCardContent, RouterLink],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {
  @Input({required: true}) game!: IGame;
  @Input() showDetails = false;

  gameDetails$!: Observable<IGameDetails | null>;

  private gameDetailsRepository = inject(GameDetailsRepository);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    if (!this.showDetails) {
      this.gameDetails$ = of(null);
      return;
    }

    this.gameDetails$ = this.gameDetailsRepository.get(this.game.id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        startWith(null),
      );
  }
}
