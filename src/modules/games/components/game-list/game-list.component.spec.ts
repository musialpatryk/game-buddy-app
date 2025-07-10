import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameListComponent } from './game-list.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { GameRepository } from '../../repositories/games/game-repository.service';

describe('GameListComponent', () => {
  let fixture: ComponentFixture<GameListComponent>;
  let mockRepository: jasmine.SpyObj<GameRepository>;



  beforeEach(async () => {
    mockRepository = jasmine.createSpyObj('GameRepository', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [GameListComponent],
      providers: [{ provide: GameRepository, useValue: mockRepository }]
    }).compileComponents();

    fixture = TestBed.createComponent(GameListComponent);
    fixture.detectChanges();
  });

  it('should render list of games', () => {
    const mockGames = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
    ];
    mockRepository.getAll.and.returnValue(of(mockGames));
    fixture.detectChanges();

    const gameItems = fixture.debugElement.queryAll(By.css('.game-item'));
    expect(gameItems.length).toBe(mockGames.length);

    mockGames.forEach((game, index) => {
      const el = gameItems[index].nativeElement;
      expect(el.textContent).toContain(game.id.toString());
      expect(el.textContent).toContain(game.name);
    });
  });

  it('should inform about empty game list', () => {
    mockRepository.getAll.and.returnValue(of([]));
    fixture.detectChanges();

    const gameItems = fixture.debugElement.queryAll(By.css('.game-item'));
    expect(gameItems.length).toBe(1);

    const infoItem = gameItems.shift();
    expect(infoItem).toBeTruthy();

    const el = infoItem!.nativeElement;
    expect(el.textContent).toBeTruthy();
  });
});
