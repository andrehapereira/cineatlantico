import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GuestItem } from '@cineatlantico/shared';
import { v4 as generateId } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private http = inject(HttpClient);

  getGuests() {
    return this.http.get<string[]>('assets/data/guests/guests.json', {
      params: {
        id: generateId()
      }
    });
  }

  getGuest(id: string) {
    return this.http.get<GuestItem>(`assets/data/guests/${id}.json`, {
      params: {
        id: generateId()
      }
    });
  }
}
