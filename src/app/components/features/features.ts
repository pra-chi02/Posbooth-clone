import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-features',
  imports: [FormsModule,CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
   features = [
    {
      title: 'Fast Billing ⚡',
      desc: 'Generate invoices instantly with smooth checkout experience',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
    },
    {
      title: 'Sales Reports 📊',
      desc: 'Track revenue, profit and performance in real-time',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      title: 'Cloud Sync ☁️',
      desc: 'Access your data anywhere securely from any device',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
    }
  ];

}
