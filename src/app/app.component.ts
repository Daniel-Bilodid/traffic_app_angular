import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { StatusComponent } from './components/status/status.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { TicketComponent } from './components/ticket/ticket.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NavComponent, StatusComponent, TrafficComponent, TicketComponent],
})
export class AppComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
}
