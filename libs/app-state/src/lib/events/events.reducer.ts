import { EventsState } from '@cineatlantico/shared';
import { createReducer, on } from '@ngrx/store';
import { ALREADY_EXISTS, GET_EVENTS, GET_EVENTS_FAIL, GET_EVENTS_SUCCESS, GET_EVENT_BY_ID, GET_EVENT_BY_ID_SUCCESS } from './events.actions';
import { onAlreadyExists, onGetEvents, onGetEventsByIdSuccess, onGetEventsFail, onGetEventsSuccess } from './events.handlers';
const initialState: EventsState = {
    loading: false,
    error: false,
    events: []
}

export const eventsReducer = createReducer(
    initialState,
    on(GET_EVENTS, onGetEvents),
    on(ALREADY_EXISTS, onAlreadyExists),
    on(GET_EVENT_BY_ID, onGetEvents),
    on(GET_EVENT_BY_ID_SUCCESS, onGetEventsByIdSuccess),
    on(GET_EVENTS_SUCCESS,onGetEventsSuccess),
    on(GET_EVENTS_FAIL, onGetEventsFail),
)