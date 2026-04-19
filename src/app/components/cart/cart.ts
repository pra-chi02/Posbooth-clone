import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // ✅ FIX (comma issue solved)
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

  cartItems: any[] = [];

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  // 🔄 Load cart data
  loadCart() {
    this.cartItems = this.cart.getCart();
  }

  // ❌ Remove item
  remove(id: number) {
    this.cart.removeItem(id);
    this.loadCart();
  }

  // ➕ Increase qty
  increase(item: any) {
    item.qty++;
  }

  // ➖ Decrease qty
  decrease(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  // 💰 Total
  getTotal() {
    return this.cartItems.reduce((total, item) => {
      const price = Number(item.price.toString().replace('₹',''));
      return total + (price * item.qty);
    }, 0);
  }
}