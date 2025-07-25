import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve } from '@angular/router';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserRepository implements Resolve<IUser> {
  private readonly DEFAULT_USER_ID = 1;

  resolve(route: ActivatedRouteSnapshot): MaybeAsync<IUser> {
    const id = route.paramMap.get('id');

    if (!id || Number.isNaN(Number(id))) {
      return {
        id: this.DEFAULT_USER_ID,
        username: 'User ' + this.DEFAULT_USER_ID,
      };
    }

    return {
      id: Number(id),
      username: 'User ' + id,
    };
  }
}
