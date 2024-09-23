import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputComponent } from './ui/input/input.component';
import { ButtonComponent } from './ui/button/button.component';
import { PageNotFoundComponent } from './pages/not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, InputComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
