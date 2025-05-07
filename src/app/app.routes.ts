import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { EntityComponent } from './entity/entity/entity.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'entities', component: EntityComponent }
];
