import { EventItem, Events } from '@cineatlantico/shared';
import { createAction, props } from '@ngrx/store';

export const GET_EVENTS = createAction(
    "GET_EVENTS"
)

export const GET_EVENT_BY_ID = createAction(
    "GET_EVENTS_BY_ID",
    props<{id: string}>()
)

export const GET_EVENT_BY_ID_SUCCESS = createAction(
    "GET_EVENT_BY_ID_SUCCESS",
    props<{
        event: EventItem
     }>()
)


export const GET_EVENTS_SUCCESS = createAction(
    "GET_EVENTS_SUCCESS",
    props<{
       events: Events
    }>()
)

export const ALREADY_EXISTS = createAction(
    "ALREADY_EXISTS"
)

export const GET_EVENTS_FAIL = createAction(
    "GET_EVENTS_FAIL"
)