import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './pages/not-found/page-not-found.component';

import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModule } from './pages/dashboard/module/dashboard.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,ToastrModule.forRoot(),BrowserAnimationsModule,DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
