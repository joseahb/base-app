import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashLayoutComponent } from './dash-layout.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [ DashboardComponent, DashLayoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
