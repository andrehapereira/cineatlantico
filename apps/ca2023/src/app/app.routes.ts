import { Route } from '@angular/router';

import { LayoutContainerComponent, MenuComponent } from '@cineatlantico/shared';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutContainerComponent,
        children: [
            {
                path: '',
                component: NxWelcomeComponent,
            },
            {
                path: 'a-mostra',
                component: NxWelcomeComponent
            },
            {
                path: 'programa',
                component: NxWelcomeComponent
            },
            {
                path: 'convidados',
                component: NxWelcomeComponent
            },
            {
                path: 'edicoes',
                component: NxWelcomeComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];
