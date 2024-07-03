import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RandomComponent } from './components/random/random.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'Random', component: RandomComponent },
  { path: 'Create', component: CreateComponent }
];
