import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent, VideoComponent } from '@cineatlantico/shared';

@Component({
  selector: 'cineatlantico-dashboard',
  standalone: true,
  imports: [CommonModule, VideoComponent, TicketsComponent],
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent {}
