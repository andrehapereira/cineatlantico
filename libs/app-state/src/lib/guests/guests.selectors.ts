import { GuestsState, Features } from "@cineatlantico/shared";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const guestsFeatureSelector = createFeatureSelector<GuestsState>(Features.GUESTS);

export const isGettingGuests = createSelector(guestsFeatureSelector, (state: GuestsState) => state.loading);
export const gettingGuestsError = createSelector(guestsFeatureSelector, (state: GuestsState) => state.error);

export const getGuests = createSelector(guestsFeatureSelector, (state: GuestsState) => state.events);

export const getGuestById = (id: string) => {
    return createSelector(guestsFeatureSelector, (state) => state.events.find(event => event.id === id))
}