import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IGame} from './game.interface';
import { ArgumentOutOfRangeError, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameRepository implements Resolve<IGame> {
  private readonly baseUrl = '/api/games';

  private http = inject(HttpClient);

  getAll(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${this.baseUrl}`);
  }

  get(id: number): Observable<IGame> {
    return this.http.get<IGame>(`${this.baseUrl}/${id}`);
  }

  create(dto: { name: string }): Observable<IGame> {
    return this.http.post<IGame>(this.baseUrl, dto);
  }

  resolve(route: ActivatedRouteSnapshot): MaybeAsync<IGame> {
    const id = route.paramMap.get('id');

    if (!id || Number.isNaN(Number(id))) {
      throw new Error('Game id is needed!');
    }

    return this.get(Number(id));
  }
}
