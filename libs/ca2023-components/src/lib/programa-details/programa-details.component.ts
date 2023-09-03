import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent, PageHeadingComponent, VideoComponent } from '@cineatlantico/shared';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { delay, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { GET_EVENT_BY_ID, getEventById, gettingEventsError } from '@cineatlantico/app-state';

@Component({
  selector: 'cineatlantico-programa-details',
  standalone: true,
  imports: [CommonModule, RouterModule, PageContainerComponent, PageHeadingComponent, MatIconModule, VideoComponent],
  templateUrl: './programa-details.component.html',
  styles: [],
})
export class ProgramaDetailsComponent implements OnInit {

  private store = inject(Store);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  id$ = inject(ActivatedRoute).paramMap.pipe(map(params => params.get('id')));

  event$ = this.id$.pipe(
        switchMap((id: string | null) =>  this.store.select(getEventById(id || ''))
                                          .pipe(
                                            tap(event => {
                                              if (!event) {
                                                this.store.dispatch(GET_EVENT_BY_ID({ id: id || '' }))
                                              }
                                            })
                                          )
          )
  )

  private shift$ = this.event$.pipe(map(event => event?.posterShift));
  
  ngOnInit() {
    this.store.select(gettingEventsError).subscribe(e => {
      if (e) {
        this.router.navigate(['..'], { relativeTo: this.activatedRoute})
      }
    })
  }

  get imgStyle$() {
    return this.shift$.pipe(map(shift => shift ? { transform: `translateY(${shift}%)` } : {}));
  }
}
