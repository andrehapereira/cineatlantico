import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent, LoadingIndicatorComponent, PageContainerComponent, PageHeadingComponent } from '@cineatlantico/shared';
import { staggerChildrenTag } from '@cineatlantico/animations';
import { Store } from '@ngrx/store';
import { GET_GUESTS, getGuests, isGettingGuests } from '@cineatlantico/app-state';
import { BehaviorSubject, combineLatest, filter, map, take, timer } from 'rxjs';

@Component({
  selector: 'cineatlantico-convidados',
  standalone: true,
  imports: [CommonModule, EventCardComponent, PageHeadingComponent, PageContainerComponent, LoadingIndicatorComponent],
  templateUrl: './convidados.component.html',
  animations: [
    staggerChildrenTag('cineatlantico-event-card', 'translateY(50%)')
  ],
})
export class ConvidadosComponent implements OnInit {

  poster = 'assets/images/event-posters/joao-canijo.jpg';

  title = 'João Canijo';

  date = 'DOMINGO, 29 OUTUBRO';

  info = "João Canijo nasceu o 10 de dezembro de 1957 em Porto, Portugal. É diretor e autor, conhecido pelo seu trabalho em Sangue do Meu Sangue (2011), É o Amor (2013) e Noite Escura (2004)."

  IMDB = "https://www.imdb.com/name/nm0133981/"

  private store = inject(Store);

  private loadingBG$ = new BehaviorSubject(false);

  loading$ = combineLatest([
    this.store.select(isGettingGuests), 
    this.loadingBG$.asObservable()
  ]).pipe(map(([loading, loadingBG]) => loading || loadingBG));

  guests$ = this.store.select(getGuests);

  ngOnInit() {
    this.store.dispatch(GET_GUESTS());
    this.preloadPosters();
  }

  private preloadPosters() {
    this.loadingBG$.next(true);
    this.store.select(getGuests).pipe(filter(guests => !!guests.length), take(1)).subscribe(async (guests) => {
      this.showGuestsAfter10Seconds();
      await Promise.all(guests.map(guest => this.preloadImage(guest.poster)))
      this.loadingBG$.next(false);
    })
  }

  private preloadImage(image: string) {
    return new Promise((resolve, _) => {
      const img = document.createElement('img');
      img.onload = () => {
        resolve(true);
      }
      img.onerror = () => {
        resolve(true);
      }
      img.src = image;
    })
}

  private showGuestsAfter10Seconds() {
    timer(10000).subscribe(_ => {
      if (this.loadingBG$.value) {
        this.loadingBG$.next(false);
      }
    })
  }

}
