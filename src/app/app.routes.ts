import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './features/login/login.component';
import { FormComponent } from './pages/form.component';
import { RepairComponent } from './pages/repair.component';
import { ViewComponent } from './pages/view/view.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import {
  AllotmentComponent,
  ContactComponent,
  HelpComponent,
  MotorDetailsComponent,
  NotificationsComponent,
  ObservationsComponent,
  ProfileComponent,
} from './pages/pages.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'form', component: FormComponent },
      { path: 'repair/:id', component: RepairComponent },
      { path: 'allotment/:id', component: AllotmentComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'view', component: ViewComponent },
      { path: 'observations', component: ObservationsComponent },
      { path: 'motor-details', component: MotorDetailsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'help', component: HelpComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];
