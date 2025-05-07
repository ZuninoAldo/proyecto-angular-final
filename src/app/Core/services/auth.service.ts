import { Injectable } from '@angular/core';
import { User } from '../../Features/auth/interfaces/User';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser.asObservable();


  private TOKEN = "1234"

  private users = [
    {
      email: 'admin@admin.com',
      password: 'admin',
      role: 'admin',
    },
    {
      email: 'sofi@altamirano.com',
      password: 'sofi',
      role: 'admin',
    },
    {
      email: 'emi@perez.com',
      password: 'emiliano',
      role: 'admin',
    },
    {
      email: 'aldo@zunino.com',
      password: 'aldo',
      role: 'user',
    },
    {
      email: 'lucia@dagresti.com',
      password: 'lucia',
      role: 'user',
    }
  ]

  constructor() { }

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if(!user){
      return false;
    }

    this._authUser.next(user)

    localStorage.setItem('token', this.TOKEN);

    return true;
  }

  getRole() {
    return this._authUser;
    }

  verifyToken(): Observable<boolean>{
    const token = localStorage.getItem('token');

    return of(token === this.TOKEN);
  }

  logout() {
    this._authUser.next(null);
  }
}

