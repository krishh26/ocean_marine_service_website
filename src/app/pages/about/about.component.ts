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

