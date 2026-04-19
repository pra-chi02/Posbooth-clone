import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  // 🔄 LOAD PRODUCT BY ID
  loadProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  // 🛒 ADD TO CART
  addToCart(product: any) {
    this.cart.addToCart(product);
    alert(product.name + ' added to cart 🛒');
  }

  }
