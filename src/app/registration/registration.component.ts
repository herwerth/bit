import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  registerUser() {
    // Itt lehetne az ellenőrzés az adatbázisban vagy localStorage-ben tárolt adatok alapján
    // Példaként most csak ellenőrizzük, hogy a felhasználónév és jelszó nem üres
    if (this.username && this.password) {
      // Mentjük a felhasználót a localStorage-be
      localStorage.setItem('currentUser', JSON.stringify({ username: this.username, password: this.password }));
      // Átirányítás a bejelentkezési oldalra
      this.router.navigate(['/login']);
    } else {
      alert('Kérem, töltse ki a felhasználónevet és a jelszót!');
    }
  }
}
