import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cineatlantico-page-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-heading.component.html',
  styles: [],
})
export class PageHeadingComponent {
  @Input({
    required: true
  })
  heading = '';
}
