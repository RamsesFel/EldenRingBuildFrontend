import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateComponent } from './components/create/create.component';
import { AllBuildsComponent } from './components/all-builds/all-builds.component';
import { SubmittedComponent } from './components/submitted/submitted.component';

export const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'Submitted', component: SubmittedComponent },
  { path: 'All', component: AllBuildsComponent}
];
