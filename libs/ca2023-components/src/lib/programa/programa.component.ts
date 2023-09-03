import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent, LoadingIndicatorComponent, PageContainerComponent, PageHeadingComponent } from '@cineatlantico/shared';
import { Store } from '@ngrx/store';
import { GET_EVENTS, getEvents, isGettingEvents} from '@cineatlantico/app-state';
import { BehaviorSubject, combineLatest, filter, map, take, tap, timer } from 'rxjs';

@Component({
  selector: 'cineatlantico-programa',
  standalone: true,
  imports: [CommonModule, PageHeadingComponent, PageContainerComponent, EventCardComponent, LoadingIndicatorComponent],
  templateUrl: './programa.component.html',
  styles: [],
})
export class ProgramaComponent {

  loadingBG$ = new BehaviorSubject(false);

  private store = inject(Store);

  events$ = this.store.select(getEvents);

  loading$ = combineLatest([
    this.store.select(isGettingEvents), 
    this.loadingBG$.asObservable()
  ]).pipe(tap(console.log),map(([loading, loadingBG]) => loading || loadingBG));

  ngOnInit() {
    this.store.dispatch(GET_EVENTS());
    this.preloadPosters();
  }

  private preloadPosters() {
    this.loadingBG$.next(true);
    this.store.select(getEvents).pipe(filter(events => !!events.length), take(1)).subscribe(async (events) => {
      this.showEventsAfter10Seconds();
      await Promise.all(events.map(event => this.preloadImage(event.poster)))
      this.loadingBG$.next(false);
    })
  }

  private preloadImage(image: string) {
    return new Promise((resolve, reject) => {
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

  // SHOW EVENTS AFTER 10 SECONDS REGARDLESS OF THE BACKGROUND BEING LOADED OR NOT
  private showEventsAfter10Seconds() {
    timer(10000).subscribe(_ => {
      if (this.loadingBG$.value) {
        this.loadingBG$.next(false);
      }
    })
  }
}
