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
import { ErrorResponse } from 'src/app/models/errorResponse';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private errorService:ErrorHandlingService,private toast:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        const errorResponse:ErrorResponse={
          result:error.error.result||null,
          message:error.error.message||"ورود ناشناخته",
          messages:error.error.error?.messages || null,
          status:error.error.status

        }
       
        this.errorService.setErrorHandling(errorResponse);
        this.toast.error(errorResponse.message);
        return throwError(() => new Error(errorResponse.message) );

      })
    );
  }
}
