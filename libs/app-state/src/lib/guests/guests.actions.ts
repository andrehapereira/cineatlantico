import { GuestItem, Guests } from '@cineatlantico/shared';
import { createAction, props } from '@ngrx/store';

export const GET_GUESTS = createAction(
    "GET_GUESTS"
)

export const GET_GUEST_BY_ID = createAction(
    "GET_GUEST_BY_ID",
    props<{id: string}>()
)

export const GET_GUEST_BY_ID_SUCCESS = createAction(
    "GET_GUEST_BY_ID_SUCCESS",
    props<{
        guest: GuestItem
     }>()
)


export const GET_GUESTS_SUCCESS = createAction(
    "GET_GUEST_SUCCESS",
    props<{
       guests: Guests
    }>()
)

export const GUEST_ALREADY_EXISTS = createAction(
    "GUEST_ALREADY_EXISTS"
)

export const GET_GUESTS_FAIL = createAction(
    "GET_GUESTS_FAIL"
)