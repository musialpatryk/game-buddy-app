import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGameComponent } from './add-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameRepository } from '../../repositories/games/game-repository.service';
import { of } from 'rxjs';

describe('AddGameComponent', () => {
  let component: AddGameComponent;
  let fixture: ComponentFixture<AddGameComponent>;
  let mockRepository: jasmine.SpyObj<GameRepository>;

  beforeEach(async () => {
    mockRepository = jasmine.createSpyObj('GameRepository', ['create']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AddGameComponent],
      providers: [
        { provide: GameRepository, useValue: mockRepository }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component and form', () => {
    expect(component).toBeTruthy();
    expect(component.form.contains('name')).toBeTrue();
  });

  it('should not create game if form is invalid', () => {
    component.form.setValue({ name: '' });
    component.submit();

    expect(mockRepository.create).not.toHaveBeenCalled();
  });

  it('should create game with valid form data', () => {
    mockRepository.create.and.returnValue(of({ id: 1, name: 'Test 1' }));

    component.form.setValue({ name: 'Test 1' });
    component.submit();

    expect(mockRepository.create).toHaveBeenCalledOnceWith({ name: 'Test 1' });
  });
});
