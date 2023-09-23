import { Route } from '@angular/router';

import { LayoutContainerComponent } from '@cineatlantico/shared';
import { AMostraComponent, ConvidadosComponent, DashboardComponent, EdicoesAnterioresComponent, ProgramaComponent, ProgramaDetailsComponent } from '@cineatlantico/ca2023-components';

export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutContainerComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: {
                    state: 'DASHBOARD'
                }
            },
            {
                path: 'a-mostra',
                component: AMostraComponent,
                data: {
                    state: 'AMOSTRA'
                }
            },
            {
                path: 'programa',
                component: ProgramaComponent,
                data: {
                    state: 'PROGRAMA'
                }
            },
            {
                path: 'programa/:id',
                component: ProgramaDetailsComponent,
                data: {
                    state: 'PROGRAMADETAILS'
                }
            },
            {
                path: 'convidados',
                component: ConvidadosComponent,
                data: {
                    state: 'CONVIDADOS'
                }
            },
            {
                path: 'edicoes',
                component: EdicoesAnterioresComponent,
                data: {
                    state: 'EDICOES'
                }
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];
