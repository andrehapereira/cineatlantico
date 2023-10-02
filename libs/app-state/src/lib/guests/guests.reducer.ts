import { GuestsState } from '@cineatlantico/shared';
import { createReducer, on } from '@ngrx/store';
import { GUEST_ALREADY_EXISTS, GET_GUESTS, GET_GUESTS_FAIL, GET_GUESTS_SUCCESS, GET_GUEST_BY_ID, GET_GUEST_BY_ID_SUCCESS } from './guests.actions';
import { onAlreadyExists, onGetGuests, onGetGuestsByIdSuccess, onGetGuestsFail, onGetGuestsSuccess } from './guests.handlers';
const initialState: GuestsState = {
    loading: false,
    error: false,
    events: []
}

export const guestsReducer = createReducer(
    initialState,
    on(GET_GUESTS, onGetGuests),
    on(GUEST_ALREADY_EXISTS, onAlreadyExists),
    on(GET_GUEST_BY_ID, onGetGuests),
    on(GET_GUEST_BY_ID_SUCCESS, onGetGuestsByIdSuccess),
    on(GET_GUESTS_SUCCESS,onGetGuestsSuccess),
    on(GET_GUESTS_FAIL, onGetGuestsFail),
)