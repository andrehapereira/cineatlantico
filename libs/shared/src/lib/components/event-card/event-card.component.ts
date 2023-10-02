import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { trigger, state, style, transition, query, stagger, animate } from '@angular/animations';

@Component({
  selector: 'cineatlantico-event-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  @Input({
    required: true
  })
  eventPoster: string = '';
  
  @Input({
    required: true
  })
  eventTitle: string = '';

  @Input({
    required: true
  })
  eventDate: string = '';
  
  @Input({
    required: false
  })
  producer: string | undefined = '';

  @Input({
    required: false
  })
  cast: string | undefined = '';

  @Input({
    required: false
  })
  additionalInfo: string | undefined = '';

  @Input({
    required: false
  })
  category: string | undefined = '';

  @Input({
    required: false
  })
  highlightLink: string | undefined = '';

  @Input({
    required: false
  })
  route: string | undefined;

  @Input({ required: false})
  clickable = true;

  @Input({ required: false})
  highlightTitle = 'IMDB';

  navigateToCardDetails() {
    if (typeof this.route === 'string') {
      this.router.navigate([this.route], { relativeTo: this.activatedRoute });
    }
  }

}
