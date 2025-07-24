import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameRepository } from '../../repositories/games/game-repository.service';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'add-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatLabel, MatFormField, MatButton],
  templateUrl: './add-game.component.html',
})
export class AddGameComponent {
  @Output() close = new EventEmitter<void>();

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

    this.form.disable();
    this.gameRepository.create({name})
      .subscribe(() => {
        this.form.reset();
        this.close.emit();
      });
  }
}
