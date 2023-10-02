import { GuestItem, Guests, GuestsState } from "@cineatlantico/shared";

export const onGetGuests = (state: GuestsState) => ({
    ...state,
    loading: true,
    error: false
})

export const onAlreadyExists = (state: GuestsState) => ({
    ...state,
    loading: false,
    error: false
})

export const onGetGuestsSuccess = (state: GuestsState,  action: { guests: Guests }) => ({
    ...state,
    events: action.guests,
    loading: false
})

export const onGetGuestsByIdSuccess = (state: GuestsState,  action: { guest: GuestItem }) => ({
        ...state,
        events: state.events.filter(event => event.id !== action.guest.id).concat([action.guest]),
        loading: false
    })

export const onGetGuestsFail = (state: GuestsState) => ({
    ...state,
    loading: false,
    error: true
})