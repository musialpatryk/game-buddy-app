import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGameDetails } from './game-details.interface';

@Injectable({
  providedIn: 'root'
})
export class GameDetailsRepository {
  private readonly baseUrl = '/api/game-details';

  private http = inject(HttpClient);

  get(gameId: number): Observable<IGameDetails> {
    return this.http.get<IGameDetails>(`${this.baseUrl}/${gameId}`);
  }
}
