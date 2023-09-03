import { EventsState, Features } from "@cineatlantico/shared";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const eventsFeatureSelector = createFeatureSelector<EventsState>(Features.EVENTS);

export const isGettingEvents = createSelector(eventsFeatureSelector, (state: EventsState) => state.loading);
export const gettingEventsError = createSelector(eventsFeatureSelector, (state: EventsState) => state.error);

export const getEvents = createSelector(eventsFeatureSelector, (state: EventsState) => state.events);

export const getEventById = (id: string) => {
    return createSelector(eventsFeatureSelector, (state) => state.events.find(event => event.id === id))
}