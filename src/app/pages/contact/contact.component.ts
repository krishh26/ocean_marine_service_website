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
      content: 'info@oceanmarineservice.co.in',
      link: 'mailto:info@oceanmarineservice.co.in'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 8490878682 / +91 7285009292',
      link: 'tel:+918490878682'
    },
    {
      icon: '📍',
      title: 'Address',
      content: 'Ground Floor, Plot no.333/F, Victoria Pool Road, Jamnagar, Gujarat - 361007',
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

