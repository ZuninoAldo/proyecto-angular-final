import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    if ((email !== 'admin@admin.com' || password !== 'admin') &&
      (email !== 'sofi@altamirano.com' || password !== 'sofi') &&
      (email !== 'emiliano@perez.com' || password !== 'emiliano')) {
      return false;
    }
    return true;
  }
}
