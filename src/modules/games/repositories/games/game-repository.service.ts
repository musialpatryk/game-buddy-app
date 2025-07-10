import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IGame} from './game.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameRepository {
  private readonly baseUrl = '/api/games';

  private http = inject(HttpClient);

  getAll(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${this.baseUrl}/games`);
  }

  create(dto: { name: string }): Observable<IGame> {
    return this.http.post<IGame>(this.baseUrl, dto);
  }
}
