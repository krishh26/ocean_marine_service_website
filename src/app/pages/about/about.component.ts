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
    {
      src: 'assets/image/pexels-nik-oak-173187900-12898407.jpg',
      alt: 'Cargo vessel at sea'
    },
    {
      src: 'assets/image/pexels-robertkso-34127257.jpg',
      alt: 'Port operations at sunset'
    },
    {
      src: 'assets/image/360_F_630151114_rdKzRM6OBt6Wjg5Gr9ET8CS47buICxgN.jpg',
      alt: 'Marine logistics overview'
    }
  ];

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
}

