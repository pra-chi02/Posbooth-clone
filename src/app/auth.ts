import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // ✅ GET USERS
  private getUsers(): any[] {
    if (!isPlatformBrowser(this.platformId)) return [];
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  // ✅ SAVE USERS
  private saveUsers(users: any[]) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  // ✅ SIGNUP
  signup(user: any): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;

    const users = this.getUsers();

    // ❌ check duplicate
    const exists = users.find(u => u.email === user.email);
    if (exists) return false;

    users.push(user);
    this.saveUsers(users);

    return true;
  }

  // ✅ LOGIN
  login(email: string, password: string): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;

    const users = this.getUsers();

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }

    return false;
  }

  // ✅ CHECK LOGIN
  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return !!localStorage.getItem('user');
  }

  // ✅ GET CURRENT USER
  getUser() {
    if (!isPlatformBrowser(this.platformId)) return null;
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  // ✅ LOGOUT
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
    }
  }
}