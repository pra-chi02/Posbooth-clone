import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {

  products: any[] = [];
  filteredProducts: any[] = [];

  searchText = '';

  newProduct = {
    name: '',
    price: '',
    image: '',
    desc: ''
  };

  previewImg: string = '';

  editId: number | null = null;
  editProduct: any = {};

  // ✅ Default fallback image
  defaultImg = 'https://images.unsplash.com/photo-1586880244406-556ebe35f282';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  // 🔄 Load products
  loadProducts() {
    this.products = this.productService.getProducts();

    // ✅ Ensure every product has image
    this.products = this.products.map(p => ({
      ...p,
      image: p.image || this.defaultImg
    }));

    this.filteredProducts = [...this.products];
  }

  // 🔍 Search
  search() {
    const text = this.searchText.toLowerCase();

    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(text)
    );
  }

  // ➕ Add Product
  addProduct() {
    if (!this.newProduct.name || !this.newProduct.price) return;

    const productToAdd = {
      ...this.newProduct,
      image: this.newProduct.image || this.defaultImg
    };

    this.productService.addProduct(productToAdd);

    // reset form
    this.newProduct = { name: '', price: '', image: '', desc: '' };
    this.previewImg = '';

    this.loadProducts();
  }

  // ✏️ Start Edit
  startEdit(p: any) {
    this.editId = p.id;
    this.editProduct = { ...p };
  }

  // 💾 Save
  save() {
    if (!this.editProduct.image) {
      this.editProduct.image = this.defaultImg;
    }

    this.productService.updateProduct(this.editProduct);

    this.editId = null;
    this.loadProducts();
  }

  // ❌ Cancel
  cancel() {
    this.editId = null;
  }

  // 🗑️ Delete
  delete(id: number) {
    this.productService.deleteProduct(id);
    this.loadProducts();
  }
}