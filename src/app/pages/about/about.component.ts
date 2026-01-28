import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  galleryImages = [
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.32.06 (16).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.32.06 (20).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.32.43 (13).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.32.43 (20).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.32.43 (21).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.32.43 (25).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.33.07 (3).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.33.07 (7).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.33.09 (1).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.33.10 (2).jpeg',
    'assets/image/cargoship/WhatsApp Image 2024-02-22 at 13.33.10 (4).jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.01 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.05 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.10 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.14 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.15 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.17 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.18 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.20 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.23 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.25 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.26 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.27 PM.jpeg',
    'assets/image/cargoship/WhatsApp Image 2026-01-27 at 2.14.30 PM.jpeg'
  ];

  showAllImages = false;
  lightboxActive = false;
  selectedImageIndex = 0;

  values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest and transparent in all our business dealings.'
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'Committed to protecting our oceans and environment.'
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Embracing new technologies and best practices.'
    }
  ];

  stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Satisfied Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' }
  ];

  get displayedImages(): string[] {
    return this.showAllImages ? this.galleryImages : this.galleryImages.slice(0, 8);
  }

  toggleGalleryView(): void {
    this.showAllImages = !this.showAllImages;
  }

  getActualImageIndex(displayIndex: number): number {
    return displayIndex;
  }

  openLightbox(index: number): void {
    this.selectedImageIndex = index;
    this.lightboxActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxActive = false;
    document.body.style.overflow = '';
  }
}

