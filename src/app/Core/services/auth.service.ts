import { Injectable } from '@angular/core';
import { User } from '../../Features/auth/interfaces/User';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { setAuthUser, unsetAuthUser } from '../store/auth/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser.asObservable();


  private TOKEN_KEY = "token";

  constructor(private http: HttpClient, private store: Store<RootState>) {
    this.verifyAndSetAuthUser();
  }

  private verifyAndSetAuthUser(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token === environment.token) {
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
        try {
          const user: User = JSON.parse(storedUser);
          this._authUser.next(user);
          this.store.dispatch(setAuthUser({ payload: user }));
          
        } catch (e) {
          console.error('Error al parsear usuario de localStorage:', e);
          localStorage.removeItem('authUser');
          this.logout();
        }
      } else {
      }
    } else {
      this.logout();
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      map(users => {
        const user = users.find(
          (u) => u.email === email && u.password === password);

        if (!user) {
          return false;
        }

        this.store.dispatch(setAuthUser({
          payload: user,
        })
      );

        this._authUser.next(user);
        localStorage.setItem(this.TOKEN_KEY, environment.token);
        localStorage.setItem('authUser', JSON.stringify(user)); 
        return true;
      }),
      catchError((error) => {
        console.error('Error al intentar iniciar sesión:', error);
        return of(false);
      })
    );
  }

  getRole(): Observable<string | undefined | null> {
    return this._authUser.pipe(
      map(user => user?.role)
    );
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem(this.TOKEN_KEY);

    return of(token === environment.token);
  }

  logout() {
    this._authUser.next(null);
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('authUser');
    this.store.dispatch(unsetAuthUser());
  }
}