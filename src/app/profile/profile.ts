import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  userName: string = '';
  userEmail: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'User';
    this.userEmail = localStorage.getItem('userEmail') || 'user@email.com';
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  // 👤 Avatar initial (safe)
  getInitial(): string {
    return this.userName ? this.userName.charAt(0).toUpperCase() : 'U';
  }
}