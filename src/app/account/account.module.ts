import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';



@NgModule({
  declarations: [
    AccountComponent, 
    LayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    AccountRoutingModule
  ]

})
export class AccountModule { }
