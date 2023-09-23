import { animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { translateY } from './helpers';

const navigateUpStateOrder = `
    DASHBOARD => AMOSTRA, 
    DASHBOARD => PROGRAMA, 
    DASHBOARD => PROGRAMADETAILS, 
    DASHBOARD => CONVIDADOS, 
    DASHBOARD => EDICOES, 
    AMOSTRA => PROGRAMA, 
    MOSTRA => PROGRAMADETAILS, 
    AMOSTRA => CONVIDADOS, 
    AMOSTRA => EDICOES, 
    PROGRAMA => PROGRAMADETAILS, 
    PROGRAMA => CONVIDADOS, 
    PROGRAMA => EDICOES, 
    PROGRAMADETAILS => CONVIDADOS, 
    PROGRAMADETAILS => EDICOES, 
    CONVIDADOS => EDICOES
    `.trim();
    
    const navigateDownStateOrder = `
    EDICOES => CONVIDADOS, 
    EDICOES => PROGRAMA, 
    EDICOES => PROGRAMADETAILS, 
    EDICOES => AMOSTRA, 
    EDICOES => DASHBOARD, 
    CONVIDADOS => PROGRAMA, 
    CONVIDADOS => PROGRAMADETAILS, 
    CONVIDADOS => AMOSTRA, 
    CONVIDADOS => DASHBOARD, 
    PROGRAMADETAILS => PROGRAMA,
    PROGRAMADETAILS => AMOSTRA,
    PROGRAMADETAILS => DASHBOARD,
    PROGRAMA => AMOSTRA, 
    PROGRAMA => DASHBOARD, 
    AMOSTRA => DASHBOARD
`.trim();

const defaultStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '200vh',
    backgroundColor: 'white',
}

const setFullscreenPages = group([
    query('.page-container', [style({ minHeight: '100vh'})],  { optional: true }),
    query('cineatlantico-footer', [style({ display: 'none'})],  { optional: true }),
]);

const navigateUp = transition(navigateUpStateOrder, [
    query(':enter, :leave', [
        style(defaultStyle)
    ], { optional: true }),
    translateY(':enter', '100%').style,
    setFullscreenPages,
    group([
        translateY(':leave', '-99%').animate,
        translateY(':enter', '0%').animate,
    ]),
    query(':enter', [
        query('@*', animateChild(), {optional: true})
    ], { optional: true })
]);

const navigateDown = transition(navigateDownStateOrder, [
    query(':enter, :leave', [
        style(defaultStyle)
    ], { optional: true }),
    translateY(':enter', '-100%').style,
    setFullscreenPages,
    group([
        translateY(':leave', '99%').animate,
        translateY(':enter', '0%').animate,
    ]),
    query(':enter', [
        query('@*', animateChild(), {optional: true})
    ] , { optional: true })
])

export const routingAnimations = trigger('animateRouting', [
    navigateUp,
    navigateDown
  ])