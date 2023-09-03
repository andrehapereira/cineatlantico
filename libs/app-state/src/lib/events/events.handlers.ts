import { EventItem, Events, EventsState } from "@cineatlantico/shared";

export const onGetEvents = (state: EventsState) => ({
    ...state,
    loading: true,
    error: false
})

export const onAlreadyExists = (state: EventsState) => ({
    ...state,
    loading: false,
    error: false
})

export const onGetEventsSuccess = (state: EventsState,  action: { events: Events }) => ({
    ...state,
    events: action.events,
    loading: false
})

export const onGetEventsByIdSuccess = (state: EventsState,  action: { event: EventItem }) => ({
        ...state,
        events: state.events.filter(event => event.id !== action.event.id).concat([action.event]),
        loading: false
    })

export const onGetEventsFail = (state: EventsState) => ({
    ...state,
    loading: false,
    error: true
})