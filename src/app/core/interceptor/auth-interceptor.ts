import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly router: Router) { }
  
  intercept<T,R>(req: HttpRequest<T>, next: HttpHandler):
  Observable<HttpEvent<R>> {

    return next.handle(req).pipe(
      catchError(error => {
        switch (error.status) {
        case UNAUTHORIZED:
          this.router.navigate(['/home']);
          break;
        case FORBIDDEN:
          this.router.navigate(['/home']);
          break;
        default:
          return throwError(() => error);
        }
      })
    );
  }
}
