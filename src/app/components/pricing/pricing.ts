import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {

    constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
