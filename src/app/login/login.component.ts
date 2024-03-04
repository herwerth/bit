import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    authservice: AuthService
    ) { }

  loginUser() {
    // Itt lehetne az ellenőrzés az adatbázisban vagy localStorage-ben tárolt adatok alapján
    // Példaként most csak ellenőrizzük, hogy a felhasználónév és jelszó nem üres
    if (this.username && this.password) {
      // Mentjük a felhasználót a localStorage-be
      localStorage.setItem('currentUser', JSON.stringify({ username: this.username, password: this.password }));
      // Átirányítás a főképernyőre
      this.router.navigate(['/home']);
    } else {
      alert('Kérem, töltse ki a felhasználónevet és a jelszót!');
    }
  }
}
