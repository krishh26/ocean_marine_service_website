import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    {
      icon: '🚢',
      title: 'Vessel Maintenance',
      description: 'Comprehensive maintenance services for all types of marine vessels.'
    },
    {
      icon: '📦',
      title: 'Cargo Handling',
      description: 'Efficient and safe cargo handling solutions for your shipping needs.'
    },
    {
      icon: '🔧',
      title: 'Marine Consulting',
      description: 'Expert consulting services for marine operations and compliance.'
    },
    {
      icon: '⚓',
      title: 'Port Services',
      description: 'Complete port services including docking, loading, and logistics.'
    }
  ];
}

