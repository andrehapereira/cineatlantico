import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'cineatlantico-layout-container',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent],
  templateUrl: './layout-container.component.html',
})
export class LayoutContainerComponent {}
