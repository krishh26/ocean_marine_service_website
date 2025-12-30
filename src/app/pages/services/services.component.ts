import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: '🚢',
      title: 'Vessel Maintenance',
      description: 'Comprehensive maintenance services for all types of marine vessels. We ensure your vessels are in optimal condition with regular inspections, repairs, and upgrades.',
      features: [
        'Regular maintenance schedules',
        'Engine and mechanical repairs',
        'Hull cleaning and painting',
        'Safety equipment inspection',
        'Emergency repair services'
      ]
    },
    {
      icon: '📦',
      title: 'Cargo Handling',
      description: 'Efficient and safe cargo handling solutions for your shipping needs. Our experienced team ensures timely and secure cargo operations.',
      features: [
        'Container handling',
        'Bulk cargo operations',
        'Dangerous goods handling',
        'Warehousing solutions',
        'Customs documentation'
      ]
    },
    {
      icon: '🔧',
      title: 'Marine Consulting',
      description: 'Expert consulting services for marine operations, compliance, and strategic planning. We help you navigate complex maritime regulations.',
      features: [
        'Regulatory compliance',
        'Safety management systems',
        'Operational optimization',
        'Risk assessment',
        'Training programs'
      ]
    },
    {
      icon: '⚓',
      title: 'Port Services',
      description: 'Complete port services including docking, loading, unloading, and logistics management. We streamline your port operations.',
      features: [
        'Berth allocation',
        'Pilotage services',
        'Tugboat services',
        'Port logistics',
        'Documentation support'
      ]
    },
    {
      icon: '🛟',
      title: 'Emergency Response',
      description: '24/7 emergency response services for maritime incidents. Our rapid response team is always ready to assist.',
      features: [
        '24/7 availability',
        'Rapid response teams',
        'Search and rescue',
        'Emergency repairs',
        'Environmental protection'
      ]
    },
    {
      icon: '🌊',
      title: 'Environmental Services',
      description: 'Sustainable and environmentally responsible marine services. We help protect our oceans while delivering excellence.',
      features: [
        'Waste management',
        'Oil spill response',
        'Environmental compliance',
        'Green technology solutions',
        'Sustainability consulting'
      ]
    }
  ];
}

