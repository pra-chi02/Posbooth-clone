import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

    products: any[] = [];

  constructor(
    private productService: ProductService,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();

  }

  // 🔄 LOAD PRODUCTS
  loadProducts() {
    this.products = this.productService.getProducts();
  }

  // 🛒 ADD TO CART
  addToCart(product: any) {
    this.cart.addToCart(product);

    // optional alert (you can remove)
    alert(product.name + ' added to cart 🛒');
  }

}