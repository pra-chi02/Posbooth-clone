import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  name: string = '';
  email: string = '';
  message: string = '';

  loading: boolean = false;
  success: string = '';
  error: string = '';

  sendMessage() {

    this.success = '';
    this.error = '';

    // ✅ Validation
    if (!this.name || !this.email || !this.message) {
      this.error = 'All fields are required ❌';
      return;
    }

    if (!this.email.includes('@')) {
      this.error = 'Enter valid email ❌';
      return;
    }

    // ✅ Simulate API call
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      this.success = 'Message sent successfully 🚀';

      // reset form
      this.name = '';
      this.email = '';
      this.message = '';
    }, 1000);
  }
}