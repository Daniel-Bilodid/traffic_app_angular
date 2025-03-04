import { Component, Input } from '@angular/core';
import { type TrafficData } from './traffic.model';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  @Input({ required: true }) traffic: TrafficData[] = [];
  @Input({ required: true }) maxTraffic!: number;
}
