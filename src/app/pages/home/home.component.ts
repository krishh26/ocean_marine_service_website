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
      secondaryLink: '/contact'
    },
    {
      image: 'assets/image/pexels-oleksiy-konstantinidi-2147541276-30306350.jpg',
      eyebrow: 'Safety & Compliance',
      title: 'Operational excellence backed by global standards',
      subtitle: 'Safety-first protocols, certified teams, and rigorous compliance across every operation.',
      primaryCta: 'Our Standards',
      primaryLink: '/about',
      secondaryCta: 'Talk to Experts',
      secondaryLink: '/contact'
    },
    {
      image: 'assets/image/pexels-bahadir-civan-209659-672460.jpg',
      eyebrow: 'Port & Cargo Services',
      title: 'Efficient port turnaround and cargo handling',
      subtitle: 'Streamlined port logistics that reduce downtime and keep your schedule on track.',
      primaryCta: 'View Capabilities',
      primaryLink: '/services',
      secondaryCta: 'Get a Quote',
      secondaryLink: '/contact'
    },
    {
      image: 'assets/image/pexels-izafi-29215512.jpg',
      eyebrow: 'Global Network',
      title: 'A trusted partner across major trade routes',
      subtitle: 'Coordinated support through a strong partner network and responsive teams.',
      primaryCta: 'Why Choose Us',
      primaryLink: '/about',
      secondaryCta: 'Contact Team',
      secondaryLink: '/contact'
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
      title: 'Vessel Maintenance & Repair',
      description: 'Planned and emergency maintenance programs that keep vessels compliant and mission-ready.'
    },
    {
      title: 'Port & Cargo Operations',
      description: 'Safe cargo handling, documentation support, and optimized port turnaround.'
    },
    {
      title: 'Marine Engineering',
      description: 'Technical support for inspections, retrofits, and performance improvements.'
    },
    {
      title: 'Crew & Supply Management',
      description: 'Crew logistics, provisioning, and procurement to keep operations moving.'
    },
    {
      title: 'Logistics & Freight Forwarding',
      description: 'End-to-end transport coordination with clear tracking and reporting.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Guidance across ISM, SOLAS, MARPOL, and local port regulations.'
    }
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
}

