import { trigger, transition, query, style, stagger, animate } from "@angular/animations";
import { initialTransform } from "./helpers";

export const staggerElementInTop = trigger('staggerElementInTop', [
    transition('* => *', [
      query(':enter', [
        initialTransform('translateY(-50%)'),
        stagger(250, [
          animate('250ms ease-in-out', style({ opacity: 1, transform: 'none' })),
        ])
      ], { optional: true })
    ]),
  ])
export const staggerElementInLeft = trigger('staggerElementInLeft', [
    transition('* => *', [
      query(':enter', [
        initialTransform('translateX(-50%)'),
        stagger(250, [
          animate('250ms ease-in-out', style({ opacity: 1, transform: 'none' })),
        ])
      ], { optional: true })
    ]),
  ])
export const staggerElementInRight = trigger('staggerElementInRight', [
    transition('* => *', [
      query(':enter', [
        initialTransform('translateX(50%)'),
        stagger(250, [
          animate('250ms ease-in-out', style({ opacity: 1, transform: 'none' })),
        ])
      ], { optional: true })
    ]),
  ])
export const staggerElementInBottom = trigger('staggerElementInBottom', [
    transition('* => *', [
      query(':enter', [
        initialTransform('translateY(50%)'),
        stagger(250, [
          animate('250ms ease-in-out', style({ opacity: 1, transform: 'none' })),
        ])
    ], { optional: true })
]),
])

export const staggerChildrenTag = (tag: string, transform: string, staggerTime = 100, timeframe = '250ms ease-in-out') => trigger('staggerChildren', [
    transition('* => *', [
        query(tag, [
            initialTransform(transform),
            stagger(staggerTime, [
                animate(timeframe, style({ opacity: 1, transform: 'none' })),
            ])
        ])
    ])
  ])