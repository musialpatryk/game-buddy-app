import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionRepository {
  private readonly baseUrl = '/api/collection-item';

  private http = inject(HttpClient);

  get(gameId: number): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.baseUrl}/${gameId}`,
    );
  }

  add(gameId: number): Observable<void> {
    return this.http.put<void>(
      `${this.baseUrl}/${gameId}`,
      {}
    );
  }

  remove(gameId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${gameId}`);
  }
}
