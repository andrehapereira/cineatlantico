import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ALREADY_EXISTS, GET_EVENTS, GET_EVENTS_FAIL, GET_EVENTS_SUCCESS, GET_EVENT_BY_ID, GET_EVENT_BY_ID_SUCCESS } from "./events.actions";
import { catchError, combineLatest, concatMap, exhaustMap, from, map, mergeAll, of, switchMap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { EventsService } from '@cineatlantico/ca2023-components'
import { EventItem, Events } from "@cineatlantico/shared";
import { getEventById, getEvents } from "./events.selectors";

@Injectable()
export class EventsEffects {
    private actions$ = inject(Actions);
    private store = inject(Store)
    private eventsService = inject(EventsService)

    getEvents$ = createEffect(() => this.actions$.pipe(
        ofType(GET_EVENTS),
        concatMap(() => {
            return this.eventsService.getEvents()
        }),
        withLatestFrom(this.store.select(getEvents)),
        concatMap(([events, storedEvents]: [string[], Events]) => {
            if (events.length === storedEvents.length) {
                return of(null);
            }
            return combineLatest(events.map(event => this.eventsService.getEvent(event)
                    .pipe(
                        map((response: EventItem) => ({ ...response, id: event }))
                    )));
        }),
        switchMap((events: Events | null) => {
            if (!events) {
                return of(ALREADY_EXISTS());
            }
            return of(GET_EVENTS_SUCCESS({ events }))
        }),
        catchError(() => {
            return of(GET_EVENTS_FAIL())
        })
    ))

    getEventById$ = createEffect(() => this.actions$.pipe(
        ofType(GET_EVENT_BY_ID),
        switchMap((action) => {
            return this.store.select(getEventById(action.id))
                    .pipe(
                        switchMap((event: EventItem | undefined) => {
                            if (event) {
                                return of(null);
                            }
                            return this.eventsService.getEvent(action.id)
                        }),
                        switchMap((event: EventItem | null) => {
                            if (!event) {
                                return of(ALREADY_EXISTS());
                            }
                            return of(GET_EVENT_BY_ID_SUCCESS({ event: { ...event, id: action.id }}))
                        })
                    );
        }),
        catchError(() => {
            return of(GET_EVENTS_FAIL())
        })
    ))

}