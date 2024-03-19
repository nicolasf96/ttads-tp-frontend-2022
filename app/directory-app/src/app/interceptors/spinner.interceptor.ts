import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.show();
    return next.handle(request).pipe(
      finalize(()=> this.spinnerService.hide())
    );
  }
}
