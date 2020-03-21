import { PagesComponent } from './pages/pages.component';

import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

//login
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'progress', component: ProgressComponent },
  //     { path: 'graficas1', component: Graficas1Component },
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

  //   ]
  // }, se paso a pageroutes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
];

// forRoot se usa para las rutas principales en page.routes.ts esta la explicacion del forChild
export const APP_ROUTES = RouterModule.forRoot(routes)
// export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true })
