import { Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { AlghoritmsFirstWeekComponent } from '../components/alghoritms-first-week/alghoritms-first-week.component';
import { AlghoritmsDoorComponent } from '../components/alghoritms-door/alghoritms-door.component';

export const routes: Routes = [
    {path:"alghoritmsfirstweek"  ,component:AlghoritmsFirstWeekComponent},
    {path:"test"  ,component:TestComponent},
    {path:"alghoritmsdoor",component:AlghoritmsDoorComponent}
];
