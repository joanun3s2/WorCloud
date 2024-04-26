import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommunityComponent } from './pages/community/community.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilePageComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: 'login', title: 'LogIn Page', component: LoginComponent },
  { path: 'dashboard', title: 'DashBoard', component: DashboardComponent },
  { path: 'community', title: 'Community', component: CommunityComponent },
  {
    path: 'profile-test',
    title: 'Profile Test',
    component: ProfilePageComponent,
  },
];
