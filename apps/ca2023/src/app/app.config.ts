import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { Features, MENU_CONFIG, MenuConfig } from '@cineatlantico/shared';
import { menuConfig } from './menu.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { EventsEffects, eventsReducer } from '@cineatlantico/app-state';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled'}), withEnabledBlockingInitialNavigation()),
    {
        provide: MENU_CONFIG,
        useValue: <MenuConfig>menuConfig
    },
    provideAnimations(),
    provideHttpClient(),
    provideStore({
      [Features.EVENTS]: eventsReducer
    }),
    provideEffects([
      EventsEffects
    ])
],
};
