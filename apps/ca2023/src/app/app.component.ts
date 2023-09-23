import { animate, query, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorComponent } from '@cineatlantico/shared';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingIndicatorComponent],
  selector: 'cineatlantico-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('appInit', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0}),
          animate('1000ms', style({ opacity: 1}))
        ], { optional: true })
      ])
    ])
  ]

})
export class AppComponent {
  @HostBinding('@appInit') public appInit = true;

}
