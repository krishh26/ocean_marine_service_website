import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@oceanmarine.com',
      link: 'mailto:info@oceanmarine.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Harbor Drive, Port City, PC 12345',
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      content: 'Mon-Fri: 8:00 AM - 6:00 PM',
      link: '#'
    }
  ];

  onSubmit() {
    if (this.isFormValid()) {
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    } else {
      alert('Please fill in all required fields.');
    }
  }

  isFormValid(): boolean {
    return !!(
      this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.subject &&
      this.contactForm.message
    );
  }
}

