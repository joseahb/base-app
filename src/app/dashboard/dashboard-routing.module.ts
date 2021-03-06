import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashLayoutComponent } from './dash-layout.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', component: DashLayoutComponent,
    children: [
      { path : '', component: DashboardComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
