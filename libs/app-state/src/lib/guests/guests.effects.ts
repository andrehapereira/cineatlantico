import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GUEST_ALREADY_EXISTS, GET_GUESTS, GET_GUESTS_FAIL, GET_GUESTS_SUCCESS, GET_GUEST_BY_ID, GET_GUEST_BY_ID_SUCCESS,  } from "./guests.actions";
import { catchError, combineLatest, concatMap,  map, of, switchMap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { GuestsService } from '@cineatlantico/ca2023-components'
import { GuestItem, Guests } from "@cineatlantico/shared";
import { getGuestById, getGuests } from "./guests.selectors";

@Injectable()
export class GuestsEffects {
    private actions$ = inject(Actions);
    private store = inject(Store)
    private guestsService = inject(GuestsService)

    getGuests$ = createEffect(() => this.actions$.pipe(
        ofType(GET_GUESTS),
        concatMap(() => {
            return this.guestsService.getGuests()
        }),
        withLatestFrom(this.store.select(getGuests)),
        concatMap(([guests, storedGuests]: [string[], Guests]) => {
            if (guests.length === storedGuests.length) {
                return of(null);
            }
            return combineLatest(guests.map(guest => this.guestsService.getGuest(guest)
                    .pipe(
                        map((response: GuestItem) => ({ ...response, id: guest }))
                    )));
        }),
        switchMap((guests: Guests | null) => {
            if (!guests) {
                return of(GUEST_ALREADY_EXISTS());
            }
            return of(GET_GUESTS_SUCCESS({ guests }))
        }),
        catchError(() => {
            return of(GET_GUESTS_FAIL())
        })
    ))

    getGuestById$ = createEffect(() => this.actions$.pipe(
        ofType(GET_GUEST_BY_ID),
        switchMap((action) => {
            return this.store.select(getGuestById(action.id))
                    .pipe(
                        switchMap((guest: GuestItem | undefined) => {
                            if (guest) {
                                return of(null);
                            }
                            return this.guestsService.getGuest(action.id)
                        }),
                        switchMap((guest: GuestItem | null) => {
                            if (!guest) {
                                return of(GUEST_ALREADY_EXISTS());
                            }
                            return of(GET_GUEST_BY_ID_SUCCESS({ guest: { ...guest, id: action.id }}))
                        })
                    );
        }),
        catchError(() => {
            return of(GET_GUESTS_FAIL())
        })
    ))

}