import { Injectable } from '@angular/core';
import { User } from '../../Features/auth/interfaces/User';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser.asObservable();


  private TOKEN = "1234"

  // private users = [
  //   {
  //     email: 'admin@admin.com',
  //     password: 'admin',
  //     role: 'admin',
  //   },
  //   {
  //     email: 'sofi@altamirano.com',
  //     password: 'sofi',
  //     role: 'admin',
  //   },
  //   {
  //     email: 'emi@perez.com',
  //     password: 'emiliano',
  //     role: 'admin',
  //   },
  //   {
  //     email: 'aldo@zunino.com',
  //     password: 'aldo',
  //     role: 'user',
  //   },
  //   {
  //     email: 'lucia@dagresti.com',
  //     password: 'lucia',
  //     role: 'user',
  //   }
  // ]

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      map(users => {
        const user = users.find(
          (u) => u.email === email && u.password === password);

        if (!user) {
          return false;
        }

        this._authUser.next(user);
        localStorage.setItem('token', this.TOKEN);
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
    const token = localStorage.getItem('token');

    return of(token === this.TOKEN);
  }

  logout() {
    this._authUser.next(null);
  }
}