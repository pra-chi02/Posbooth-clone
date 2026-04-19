import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';   // ✅ ADD

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];

  // ✅ ADD THIS (observable)
  cartCount$ = new BehaviorSubject<number>(0);
 
  // ➕ Add to cart
  addToCart(product: any) {
    const existing = this.cart.find(p => p.id === product.id);

    if (existing) {
      existing.qty++;
    } else {
      this.cart.push({ ...product, qty: 1 });
    }

    // 🔥 update count
    this.cartCount$.next(this.cart.length);
  }

  // 📦 Get cart
  getCart() {
    return this.cart;
  }

  // ❌ Remove
  removeItem(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);

    // 🔥 update count
    this.cartCount$.next(this.cart.length);
  }

  // 🔢 Count (fallback)
  getCount() {
    return this.cart.length;
  }
}