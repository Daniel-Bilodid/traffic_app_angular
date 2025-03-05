import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { StatusComponent } from './components/status/status.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavComponent,
    StatusComponent,
    TrafficComponent,
    TicketComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
