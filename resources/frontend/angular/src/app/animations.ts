import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export let slideInDownNav = 
trigger('slideDown', [
    transition(':enter',[
        style({ transform: 'translateY(-100%)' }),
        animate('700ms ease')
    ])
]);

let titleDelay = 1000;
export let slideInLeft = 
trigger('slideInLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-300%)' }),
        animate('700ms ' + titleDelay + 'ms ease')
    ])
]);

export let slideInRight = 
trigger('slideInRight', [
    transition(':enter',[
        style({ opacity: 0, transform: 'translateX(300%)' }),
        animate('700ms ' + titleDelay + 'ms ease'),
    ])
]);


let subTitleDelay = titleDelay + 500;
// let subTitleDelay = 4000;
export let slideInUp = 
trigger('slideInUp', [
    transition(':enter',[
        style({ opacity: 0, transform: 'translateY(400%)' }),
        animate('700ms ' + subTitleDelay + 'ms ease'),
    ])
]);