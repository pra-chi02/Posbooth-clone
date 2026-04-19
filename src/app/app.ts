import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { AuthService } from './auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  isLoggedIn = false;
  showFooter = true;   // ✅ FIX: initialize

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

    this.isLoggedIn = this.auth.isLoggedIn(); // ✅ first load fix

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        this.isLoggedIn = this.auth.isLoggedIn();

        // ❌ Hide footer on specific pages
        const noFooterRoutes = ['/cart', '/login', '/signup'];

        this.showFooter = !noFooterRoutes.some(route =>
          event.url.includes(route)
        );
      }
    });
  }
}