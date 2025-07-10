import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameRepository } from '../../../repository/games/game-repository.service';

@Component({
  selector: 'add-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-game.component.html',
})
export class AddGameComponent {
  private gameRepository = inject(GameRepository);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  submit(): void {
    if (!this.form.valid) {
      return;
    }

    const { name } = this.form.value;
    if (!name) {
      return;
    }

    this.gameRepository.create({name})
      .subscribe(() => {
        this.form.reset();
      });
  }
}
