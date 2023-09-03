import { Events } from "./events"


export interface EventsState {
    loading: boolean,
    error: boolean,
    events: Events
}

export enum Features {
    EVENTS = 'events'
}
