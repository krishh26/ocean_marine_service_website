import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-reach',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-reach.component.html',
  styleUrls: ['./our-reach.component.css']
})
export class OurReachComponent {
  ports = [
    'Mumbai',
    'JNPT (Nhava Sheva)',
    'Dharamtar',
    'Dahanu',
    'Hazira',
    'Magdalla',
    'Mundra',
    'Kandla',
    'Navlakhi',
    'Okha',
    'Bhavnagar',
    'Pipavav',
    'Dahej',
    'Bedi',
    'Jaigarh',
    'Port Redi',
    'Dighi',
    'Mormugao (Goa)',
    'Karwar',
    'New Mangalore',
    'Tuticorin',
    'Karaikal',
    'Krishnapatnam',
    'Gangavaram',
    'Chennai',
    'Ennore',
    'Kakinada',
    'Vishakhapatnam',
    'Paradip',
    'Sikka',
    'Porbandar'
  ];

  getPortIcon(port: string): string {
    return '⚓';
  }

  westCoastPorts = [
    'Mumbai',
    'JNPT (Nhava Sheva)',
    'Dharamtar',
    'Dahanu',
    'Hazira',
    'Magdalla',
    'Mundra',
    'Kandla',
    'Navlakhi',
    'Okha',
    'Bhavnagar',
    'Pipavav',
    'Dahej',
    'Bedi',
    'Jaigarh',
    'Port Redi',
    'Dighi',
    'Mormugao (Goa)',
    'Karwar',
    'New Mangalore',
    'Sikka',
    'Porbandar'
  ];

  eastCoastPorts = [
    'Tuticorin',
    'Karaikal',
    'Krishnapatnam',
    'Gangavaram',
    'Chennai',
    'Ennore',
    'Kakinada',
    'Vishakhapatnam',
    'Paradip'
  ];
}
