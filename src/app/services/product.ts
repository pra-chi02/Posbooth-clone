import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: any[] = [
  {
    id: 1,
    name: 'Gaming POS Machine',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800',
    desc: 'RGB powered smart billing system'
  },
  {
    id: 2,
    name: 'Barcode Scanner',
    price: 3000,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRchsXhp7dUmTBr1qjqy8yvez-DbV6v4jzNwglgiWyfMc0EYd_IUoiSN9a_Qrt6B0VXypSWw0Hl5gkvRNQOd_Ylvl5ujENF86iklIBip5uyD7XD-EqztZEiZg',
    desc: 'Fast scanning device'
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800',
    desc: 'RGB mechanical keyboard'
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800',
    desc: 'High precision mouse'
  },
  {
    id: 5,
    name: 'Monitor Setup',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800',
    desc: 'Dual monitor workstation'
  },
  {
    id: 6,
    name: 'Receipt Printer',
    price: 4500,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_jkKMPuYntuK1UvvbF8EiVmJra3BWXCn2b1Pb2dw2oDUbXacEKcnC0bDcB9KSHwMk4LswygrBz_sXJt5h5FDbFZy3m6wMqy1_ZHEHEgmIJ_u1nQBd_eAaMQ',
    desc: 'Thermal printing device'
  },
  {
    id: 7,
    name: 'Gaming Laptop',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800',
    desc: 'High performance gaming laptop'
  },
  {
    id: 8,
    name: 'Tablet POS',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800',
    desc: 'Portable POS system'
  },
  {
    id: 9,
    name: 'Headphones',
    price: 3500,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqvsdgnoInuBFHu1QziUCM4DFDKyI-AWhzBJjOjG5D3CLmDdhcilEyL1AwShh1eNoA7BkLwQZ8NkRPhNTqN9IxxF9QjTlAUJ7fxS3Y3IWfeo-20mROmCDMFwH0EX5-s_rnDhykzg&usqp=CAc',
    desc: 'Noise cancelling headset'
  },
  {
    id: 10,
    name: 'QR Scanner',
    price: 2000,
    image: 'https://m.media-amazon.com/images/I/71sD03bq+oL.jpg',
    desc: 'Quick QR scanning'
  },
  {
    id: 11,
    name: 'Gaming Chair',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800',
    desc: 'Comfortable ergonomic chair'
  },
  {
    id: 12,
    name: 'LED Monitor',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800',
    desc: 'Full HD LED display'
  },
  {
    id: 13,
    name: 'Cash Drawer',
    price: 2500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIO832EzEqNKhGX-s1EehxdrcT70LpZt_QA&s',
    desc: 'Secure cash storage'
  },
  {
    id: 14,
    name: 'Smart Watch',
    price: 6000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlgrEzhiRmx33he1sAc_xB75zy_uGmjjaPg&s',
    desc: 'Track activity & notifications'
  },
  {
    id: 15,
    name: 'Gaming Controller',
    price: 4500,
    image: 'data:image/jpeg;base64,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',
    desc: 'Wireless gaming controller'
  },
  {
    id: 16,
    name: 'USB Hub',
    price: 1200,
    image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    desc: 'Multi-port USB hub'
  },
  {
    id: 17,
    name: 'External SSD',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800',
    desc: 'Fast storage solution'
  },
  {
    id: 18,
    name: 'WiFi Router',
    price: 3500,
    image: 'data:image/jpeg;base64,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',
    desc: 'High speed internet router'
  },
  {
    id: 19,
    name: 'Webcam HD',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800',
    desc: 'HD video streaming camera'
  },
  {
    id: 20,
    name: 'Microphone',
    price: 4000,
    image: 'https://kreo-tech.com/cdn/shop/files/Frame1000007040.png?v=1771248988&width=1000',
    desc: 'Studio quality mic'
  }
];

  // ✅ GET ALL
  getProducts() {
    return this.products;
  }

  // ✅ GET BY ID
  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  // ✅ ADD
  addProduct(product: any) {
    const newProduct = {
      id: Date.now(),
      name: product.name,
      price: Number(product.price), // ✅ FIX
      image: product.image || 'https://via.placeholder.com/300', // ✅ fallback
      desc: product.desc || 'No description'
    };

    this.products.push(newProduct);
  }

  // ✅ UPDATE
  updateProduct(updated: any) {
    const index = this.products.findIndex(p => p.id === updated.id);

    if (index !== -1) {
      this.products[index] = {
        ...updated,
        price: Number(updated.price), // ✅ FIX
        image: updated.image || this.products[index].image
      };
    }
  }

  // ✅ DELETE
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}