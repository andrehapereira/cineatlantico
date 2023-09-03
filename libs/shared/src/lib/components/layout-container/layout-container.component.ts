import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'cineatlantico-layout-container',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent, FooterComponent],
  templateUrl: './layout-container.component.html',
})
export class LayoutContainerComponent {}
