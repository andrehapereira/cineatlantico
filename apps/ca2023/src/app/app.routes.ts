import { Route } from '@angular/router';

import { LayoutContainerComponent } from '@cineatlantico/shared';
import { AMostraComponent, ConvidadosComponent, DashboardComponent, EdicoesAnterioresComponent, ProgramaComponent, ProgramaDetailsComponent } from '@cineatlantico/ca2023-components';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutContainerComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'a-mostra',
                component: AMostraComponent
            },
            {
                path: 'programa',
                component: ProgramaComponent
            },
            {
                path: 'programa/:id',
                component: ProgramaDetailsComponent
            },
            {
                path: 'convidados',
                component: ConvidadosComponent
            },
            {
                path: 'edicoes',
                component: EdicoesAnterioresComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];
