import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../auth';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isLoggedIn = false;


  cartCount = 0;
  userName = '';

  constructor(
    private cart: CartService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  // 🔄 Load user + cart
  loadData() {

  // ✅ SAFE for SSR
  if (typeof window !== 'undefined') {
    this.userName = localStorage.getItem('userName') || 'User';
  }

  // ✅ CART COUNT LIVE
  this.cart.cartCount$.subscribe((count: number) => {
    this.cartCount = count;
  });
    this.isLoggedIn = this.auth.isLoggedIn();

}

  // 🚪 Logout
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  

}