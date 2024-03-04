import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  registerUser(username: string, password: string): void {
    // Elmentjük a felhasználót a localStorage-be
    localStorage.setItem(username, password);
  }

  loginUser(username: string, password: string): boolean {
    // Ellenőrizzük, hogy a megadott felhasználónévhez tartozik-e jelszó
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      // Sikeres bejelentkezés
      return true;
    } else {
      // Sikertelen bejelentkezés
      return false;
    }
  }

  logoutUser(): void {
    // Kijelentkezés
    sessionStorage.removeItem('currentUser');
  }
}
