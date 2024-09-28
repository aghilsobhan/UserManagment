import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/service/errors/error-handling.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private errorService:ErrorHandlingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `خطای سمت سرور مجددا تلاش کنید`;
        } else {
          // Server-side error
          console.log(error);
          this.errorService.setErrorHandling(error.error);
        }

        // Log the error (can log to a logging service)
        console.error(errorMessage);

        // Handle specific error responses (e.g., redirecting to login on 401)
        if (error.status === 401) {
          // Navigate to login page if unauthorized
          errorMessage = 'خطا در برقراری ارتباط';
        } else if (error.status === 404) {
          // Navigate to a custom error page
          console.log(error.status);
        } else {
          // Optionally, you can display a generic error notification or dialog
          alert(errorMessage);
        }

        return throwError(errorMessage);
      })
    );
  }
}
