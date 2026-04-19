import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { Router, RouterLink } from '@angular/router'; // ✅ FIXED
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ IMPORTANT
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'] // ✅ FIXED
})
export class Login {

  email = '';
  password = '';
  error = '';
  showPassword = false;
loading: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {

  this.error = '';

  if (!this.email || !this.password) {
    this.error = 'All fields are required ❌';
    return;
  }

  this.loading = true;

  setTimeout(() => {

    const success = this.auth.login(this.email, this.password);
    this.loading = false;

    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid credentials ❌';
    }

  }, 500);
  }
}
