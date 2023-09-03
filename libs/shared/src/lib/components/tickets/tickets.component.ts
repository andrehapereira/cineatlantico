import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cineatlantico-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styles: [],
})
export class TicketsComponent {
  @Input({
    required: true
  })
  label: string = '';
  
  @Input({
    required: true
  })
  normalPrice: string = '';
  
  @Input()
  normalTicketBG:string = '';
  
  @Input({
    required: true
  })
  partnerPrice:string = '';
  
  @Input()
  partnerTicketBG:string = '';

  
}
