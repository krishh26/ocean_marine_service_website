import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/image/pexels-oleksiy-konstantinidi-2147541276-30049589.jpg',
      eyebrow: 'Ocean Marine Services',
      title: 'Reliable marine solutions for every voyage',
      subtitle: 'Integrated vessel support, port services, and marine logistics delivered with precision.',
      primaryCta: 'Explore Services',
      primaryLink: '/services',
      secondaryCta: 'Request Support',
      secondaryLink: '/contact',
      heroTitle: 'Professional Marine Surveying Services<br>Expert Consultants & Engineers<br>Comprehensive Maritime Solutions',
      tagline1: 'Trusted Excellence',
      tagline2: 'Proven Capability',
      taglineSub: 'Delivering Unmatched Quality in Every Assignment'
    },
    {
      image: 'assets/image/pexels-oleksiy-konstantinidi-2147541276-30306350.jpg',
      eyebrow: 'Safety & Compliance',
      title: 'Operational excellence backed by global standards',
      subtitle: 'Safety-first protocols, certified teams, and rigorous compliance across every operation.',
      primaryCta: 'Our Standards',
      primaryLink: '/about',
      secondaryCta: 'Talk to Experts',
      secondaryLink: '/contact',
      heroTitle: 'Safety & Compliance Excellence<br>Certified Marine Professionals<br>Global Standards & Protocols',
      tagline1: 'Safety First',
      tagline2: 'Global Standards',
      taglineSub: 'Certified Teams Ensuring Operational Excellence'
    },
    {
      image: 'assets/image/pexels-bahadir-civan-209659-672460.jpg',
      eyebrow: 'Port & Cargo Services',
      title: 'Efficient port turnaround and cargo handling',
      subtitle: 'Streamlined port logistics that reduce downtime and keep your schedule on track.',
      primaryCta: 'View Capabilities',
      primaryLink: '/services',
      secondaryCta: 'Get a Quote',
      secondaryLink: '/contact',
      heroTitle: 'Efficient Port Operations<br>Expert Cargo Handling<br>Streamlined Logistics Solutions',
      tagline1: 'Efficient Operations',
      tagline2: 'Timely Delivery',
      taglineSub: 'Streamlined Logistics for Maximum Efficiency'
    },
    {
      image: 'assets/image/pexels-izafi-29215512.jpg',
      eyebrow: 'Global Network',
      title: 'A trusted partner across major trade routes',
      subtitle: 'Coordinated support through a strong partner network and responsive teams.',
      primaryCta: 'Why Choose Us',
      primaryLink: '/about',
      secondaryCta: 'Contact Team',
      secondaryLink: '/contact',
      heroTitle: 'Global Maritime Network<br>Trusted Partner Worldwide<br>Coordinated Support Services',
      tagline1: 'Global Reach',
      tagline2: 'Trusted Partner',
      taglineSub: 'Coordinated Support Across Major Trade Routes'
    }
  ];

  stats = [
    { value: '20+ Years', label: 'Marine industry expertise' },
    { value: '24/7', label: 'Operational response' },
    { value: '60+ Ports', label: 'Coverage across key routes' },
    { value: '98%', label: 'On-time service delivery' }
  ];

  services = [
    {
      title: 'On-Hire Bunker Survey',
      description: 'Professional on-hire bunker survey services for accurate fuel quantity measurements.',
      link: '/services'
    },
    {
      title: 'Draught Survey',
      description: 'Comprehensive draught surveys for accurate cargo weight determination.',
      link: '/services'
    },
    {
      title: 'Pre-loading Condition Survey',
      description: 'Thorough pre-loading condition and tally surveys for steel and project cargo.',
      link: '/services'
    },
    {
      title: 'Container Surveys',
      description: 'Various types of container surveys to ensure cargo safety and compliance.',
      link: '/services'
    },
    {
      title: 'Cargo Supervision',
      description: 'Supervising and monitoring during loading and discharging operations.',
      link: '/services'
    },
    {
      title: 'Independent Third Party Survey',
      description: 'Unbiased independent third-party surveys for all maritime operations.',
      link: '/services'
    }
  ];

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

  testimonials = [
    {
      quote: 'Their team reduced our port turnaround time while maintaining full compliance.',
      name: 'Operations Director',
      company: 'Blue Wave Shipping'
    },
    {
      quote: 'We rely on Ocean Marine for critical maintenance windows. Always on schedule.',
      name: 'Fleet Manager',
      company: 'North Sea Logistics'
    },
    {
      quote: 'Clear communication and dependable service across multiple ports.',
      name: 'Head of Procurement',
      company: 'Horizon Maritime'
    }
  ];

  activeSlide = 0;
  private slideInterval?: number;
  lightboxActive = false;
  selectedImageIndex = 0;
  showAllImages = false;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.slideInterval = window.setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 6000);
  }

  private stopAutoSlide(): void {
    if (this.slideInterval) {
      window.clearInterval(this.slideInterval);
    }
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  openLightbox(index: number): void {
    this.selectedImageIndex = index;
    this.lightboxActive = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeLightbox(): void {
    this.lightboxActive = false;
    document.body.style.overflow = ''; // Restore scrolling
  }

  get displayedImages(): string[] {
    return this.showAllImages ? this.galleryImages : this.galleryImages.slice(0, 8);
  }

  toggleGalleryView(): void {
    this.showAllImages = !this.showAllImages;
  }

  getActualImageIndex(displayIndex: number): number {
    // When showing all images, displayIndex matches galleryImages index
    // When showing only 8, displayIndex (0-7) matches galleryImages index (0-7)
    return displayIndex;
  }
}

