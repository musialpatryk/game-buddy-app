import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IGame } from '../../repositories/games/game.interface';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, Observable, of, startWith } from 'rxjs';
import { IGameDetails } from '../../repositories/game-details/game-details.interface';
import { Router, RouterLink } from '@angular/router';
import { GameDetailsRepository } from '../../repositories/game-details/game-details-repository.service';
import { MatButton } from '@angular/material/button';
import { CollectionRepository } from '../../repositories/collection/collection-repository.service';

@Component({
  selector: 'game',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatCardTitle, MatCardFooter, MatChipSet, MatChip, MatCardContent, RouterLink, MatButton],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {
  @Input({required: true}) game!: IGame;
  @Input() showDetails = false;

  gameDetails$!: Observable<IGameDetails | null>;
  inCollection$!: Observable<boolean | null>;

  private gameDetailsRepository = inject(GameDetailsRepository);
  private collectionRepository = inject(CollectionRepository);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    if (!this.showDetails) {
      this.gameDetails$ = of(null);
      this.inCollection$ = of(null);
      return;
    }

    this.gameDetails$ = this.gameDetailsRepository.get(this.game.id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        startWith(null),
        catchError(() => of({categories: []}))
      );
    this.inCollection$ = this.collectionRepository.get(this.game.id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
      );
  }

  updateCollection(inCollection: boolean | null) {
    const change$ = inCollection
      ? this.collectionRepository.remove(this.game.id)
      : this.collectionRepository.add(this.game.id);

    change$.subscribe(() => {
      if (!inCollection) {
        this.router.navigate(['/games']);
      }

      this.router.navigate(['/collection'])
    })
  }
}
