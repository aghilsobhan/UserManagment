import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './pages/not-found/page-not-found.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './pages/dashboard/module/dashboard.module';
import { SetHeaderInterceptor } from './utils/set-header.interceptor';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,ToastrModule.forRoot(),BrowserAnimationsModule,DashboardModule],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:SetHeaderInterceptor,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
