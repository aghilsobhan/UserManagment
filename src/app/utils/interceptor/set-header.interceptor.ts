import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth/auth.service';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {
  constructor(private tokenService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    let modifyRequest = request;
    if (token) {
      modifyRequest = request.clone({
        setHeaders: { Authorization: `${token}` },
      });
    }
    return next.handle(modifyRequest);
  }
}
