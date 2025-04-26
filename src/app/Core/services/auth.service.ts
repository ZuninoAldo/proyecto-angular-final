import { Injectable } from '@angular/core';
import { User } from '../../Features/auth/interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser: User | null = null;

  constructor() { }

  login(email: string, password: string): boolean {
    if ((email !== 'admin@admin.com' || password !== 'admin') &&
      (email !== 'sofi@altamirano.com' || password !== 'sofi') &&
      (email !== 'emiliano@perez.com' || password !== 'emiliano')) {
      return false;
    }

    this.authUser = {
      email,
      role: 'admin',
    };
    return true;
  }
}
