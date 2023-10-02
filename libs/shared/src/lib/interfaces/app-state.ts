import { Events } from "./events"


export interface EventsState {
    loading: boolean,
    error: boolean,
    events: Events
}

export type GuestsState = EventsState;

export enum Features {
    EVENTS = 'events',
    GUESTS = 'guests'
}
