import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cineatlantico-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule ],
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  @HostBinding() cls = 'mt-auto';
}
