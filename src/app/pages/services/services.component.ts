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
    'On-Hire Bunker Survey',
    'On-Hire Bunker & Condition Survey',
    'Off-Hire Bunker Survey',
    'Off-Hire Bunker & Condition Survey',
    'Bunker Detective (221B) Surveys',
    'BQS, Bunker Receipt (Supply) Survey',
    'Car Carrier pre-loading survey',
    'Draught Survey',
    'Hold inspection Survey',
    'Hose test of hatch cover Survey',
    'Cargo hatches free space inspection surveys',
    'Pre-shipment cargo survey',
    'Pre-loading Condition and Tally Survey of Steel & Project cargo. Assist the Master in clausing the Mate\'s Receipt\'s',
    'Tally and condition discharge survey of Steel & Project cargo',
    'Onboard Cargo Condition survey',
    'Supervising / Monitoring during loading / Discharging operations',
    'Bulk / bagged cargo Loading/discharge supervision surveys',
    'Rake loading / Discharging Supervision surveys',
    'Oil Tanker – Tank Gauging',
    'All types of tally survey',
    'Vessel\'s gear operating cycle analysis / Joint Surveys',
    'Various types of Container Surveys',
    'Independent Third Party Survey',
    'Stevedore Damage Survey'
  ];
}

