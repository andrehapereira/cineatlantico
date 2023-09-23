import { animate, query, style } from "@angular/animations";

export const translateY = (state:string, amount: string, timeframe = '300ms ease-in-out') => ({
    style: query(state, [style({transform: `translateY(${amount})`})], { optional: true }),
    animate: query(state, [animate(timeframe, style({ transform: `translateY(${amount})`}))], { optional: true })
})

export const initialTransform = (transform: string) => style({opacity: 0,transform});
