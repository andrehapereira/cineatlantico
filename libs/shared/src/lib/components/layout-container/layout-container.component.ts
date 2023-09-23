import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { routingAnimations } from '@cineatlantico/animations';
@Component({
  selector: 'cineatlantico-layout-container',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent, FooterComponent],
  templateUrl: './layout-container.component.html',
  animations: [
    routingAnimations
  ]
})
export class LayoutContainerComponent {

  public getRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['state'];
  }

}
