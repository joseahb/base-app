import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const dashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);


const routes: Routes = [
  
    { path: '', component: HomeComponent },
    { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule  },
    { path: 'dashboard', loadChildren: dashboardModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
