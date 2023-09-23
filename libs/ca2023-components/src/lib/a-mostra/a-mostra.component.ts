import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent, PageHeadingComponent } from '@cineatlantico/shared';
import { staggerChildrenTag } from '@cineatlantico/animations';

@Component({
  selector: 'cineatlantico-a-mostra',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, PageHeadingComponent],
  templateUrl: './a-mostra.component.html',
  animations: [
    staggerChildrenTag('p, .signature', 'translateY(-50%)', 50)
  ],
})
export class AMostraComponent {}
