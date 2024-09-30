import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './pages/not-found/page-not-found.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SetHeaderInterceptor } from './utils/interceptor/setheader/set-header.interceptor';

import { InitializerServiceService } from './utils/initializer-service.service';
import { ResponseInterceptor } from './utils/interceptor/setresponse/response.interceptor';
import { ModuleUiModule } from './ui/module/module-ui.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';


import { ModuleUserModule } from './pages/users/module-user/module-user.module';
import { SharedModule } from './shared/shared/shared.module';
import { MainComponent } from './pages/main/main.component';



export function initializeUser(initializeService: InitializerServiceService) {
  return () => initializeService.init();
}
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ModuleUiModule,
    ModuleUserModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUser,
      multi: true,
      deps: [InitializerServiceService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
