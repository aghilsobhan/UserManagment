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
import { DialogViewComponent } from 'src/app/ui/dialog-view/dialog-view.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private errorService:ErrorHandlingService,private dialog:MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("object");
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        const errorResponse:ErrorResponse={
          result:error.error.result||null,
          message:error.error.message||"ورود ناشناخته",
          messages:error.error.error?.messages || null,
          status:error.error.status
        }
        this.errorService.setErrorHandling(errorResponse);
        this.dialog.open(DialogViewComponent,{
          data:{
            message:errorResponse.message||''
          }
        })
        return throwError(() => new Error(errorResponse.message) );

      })
    );
  }
}
