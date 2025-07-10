import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRepository } from '../../repositories/games/game-repository.service';

@Component({
  selector: 'game-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-list.component.html',
})
export class GameListComponent {
  gameRepository = inject(GameRepository);
}
