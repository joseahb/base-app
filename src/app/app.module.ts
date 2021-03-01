import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthInterceptor } from './_helpers/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { apiBackendProvider } from './_helpers/api.backend';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClient
>>>>>>> 1cacb57c205f2104c000fad6fbd052a5a3c3cecf
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS , useClass: ErrorInterceptor, multi: true},
    // Backend link
    apiBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
