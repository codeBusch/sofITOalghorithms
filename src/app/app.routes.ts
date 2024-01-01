import { Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { AlghoritmsFirstWeekComponent } from '../components/alghoritms-first-week/alghoritms-first-week.component';
import { AlghoritmsDoorComponent } from '../components/alghoritms-door/alghoritms-door.component';
import { MultipleTextAnimatonComponent } from '../components/multiple-text-animaton/multiple-text-animaton.component';
import { MexicoAnimationComponent } from '../components/mexico-animation/mexico-animation.component';
import { BasketCardComponent } from '../components/basket-card/basket-card.component';

export const routes: Routes = [
    {path:"alghoritmsfirstweek"  ,component:AlghoritmsFirstWeekComponent},
    {path:"test"  ,component:TestComponent},
    {path:"alghoritmsdoor",component:AlghoritmsDoorComponent},
    {path:"alghoritmsmultipletype",component:MultipleTextAnimatonComponent},
    {path:"alghoritmsmexiconanimaton",component:MexicoAnimationComponent},
    {path:"basketcard", component:BasketCardComponent}
];
