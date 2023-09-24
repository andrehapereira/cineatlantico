import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent, VideoBackgroundComponent, VideoComponent } from '@cineatlantico/shared';

@Component({
  selector: 'cineatlantico-dashboard',
  standalone: true,
  imports: [CommonModule, VideoComponent, TicketsComponent, VideoBackgroundComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
