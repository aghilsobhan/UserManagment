import { Injectable } from '@angular/core';
import { ErrorResponse } from 'src/app/models/errorResponse';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  error!: ErrorResponse;

  constructor() {}
  setErrorHandling(data: ErrorResponse) {
    this.error = data;
  }
  getErrorHandling() {
    return this.error;
  }
}
