import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EventItem } from '@cineatlantico/shared';
import { v4 as generateId } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private http = inject(HttpClient);

  getEvents() {
    return this.http.get<string[]>('assets/data/events.json', {
      params: {
        id: generateId()
      }
    });
  }

  getEvent(id: string) {
    return this.http.get<EventItem>(`assets/data/${id}.json`, {
      params: {
        id: generateId()
      }
    });
  }
}
