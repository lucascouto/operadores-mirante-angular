import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalsService } from './globals.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private route: Router, private globals: GlobalsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // desloga o usuario caso de um erro de autenticacao ou autorizacao
                localStorage.clear()
                this.route.navigate(['/'])
                this.globals.mostrarMenu = false

            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}