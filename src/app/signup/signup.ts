import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { Router, RouterLink } from '@angular/router'; // ✅ FIXED
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true, // ✅ IMPORTANT
  imports: [FormsModule, RouterLink], // ✅ add RouterLink
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'] // ✅ FIXED
})
export class Signup {

  name = '';
  email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  signup() {
  if (this.password.length < 6) {
    this.error = 'Password must be at least 6 characters ❌';
    return;
  }

  const success = this.auth.signup({
    name: this.name,
    email: this.email,
    password: this.password
  });

  if (success) {
    localStorage.setItem('userName', this.name);
    localStorage.setItem('userEmail', this.email);

    this.router.navigate(['/login']);
  } else {
    this.error = 'User already exists ❌';
  }
}
}