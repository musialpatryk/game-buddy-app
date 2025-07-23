import {Component} from '@angular/core';
import { GamesModule } from '../../modules/games/games.module';

@Component({
  selector: 'game-view',
  standalone: true,
  imports: [GamesModule],
  templateUrl: './games-view.component.html',
})
export class GameViewComponent {
}
