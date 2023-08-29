import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { MENU_CONFIG, MenuConfig } from '@cineatlantico/shared';
import { menuConfig } from './menu.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: MENU_CONFIG,
      useValue: <MenuConfig>menuConfig
    }
  ],
};
