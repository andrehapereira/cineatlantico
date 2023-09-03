import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent, LoadingIndicatorComponent, PageContainerComponent, PageHeadingComponent } from '@cineatlantico/shared';

@Component({
  selector: 'cineatlantico-convidados',
  standalone: true,
  imports: [CommonModule, EventCardComponent, PageHeadingComponent, PageContainerComponent, LoadingIndicatorComponent],
  templateUrl: './convidados.component.html',
  styles: [],
})
export class ConvidadosComponent {

  poster = 'assets/images/event-posters/joao-canijo.jpg';

  title = 'João Canijo';

  date = 'DOMINGO, 29 OUTUBRO';

  info = "João Canijo nasceu o 10 de dezembro de 1957 em Porto, Portugal. É diretor e autor, conhecido pelo seu trabalho em Sangue do Meu Sangue (2011), É o Amor (2013) e Noite Escura (2004)."

  IMDB = "https://www.imdb.com/name/nm0133981/"

}
