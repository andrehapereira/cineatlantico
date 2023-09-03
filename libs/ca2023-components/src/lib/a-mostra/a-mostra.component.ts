import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent, PageHeadingComponent } from '@cineatlantico/shared';

@Component({
  selector: 'cineatlantico-a-mostra',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, PageHeadingComponent],
  templateUrl: './a-mostra.component.html',
  styles: [],
})
export class AMostraComponent {}
