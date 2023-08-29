import { InjectionToken } from "@angular/core";

export const MENU_CONFIG = new InjectionToken('[MENU_CONFIG] Configuration for menu items to be displayed');

export interface MenuItem {
    label: string,
    route: string
}

export type MenuConfig = MenuItem[];