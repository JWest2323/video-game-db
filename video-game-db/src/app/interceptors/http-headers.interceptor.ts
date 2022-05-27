import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': 'b30ecf93d1msh9bcb1218e193465p1c204ejsnb0184f0e63d3'
            },
            setParams: {
                key: '2aebf26202a2417989788d042a9b1239'
            }
        });
        return next.handle(req);
    }
}
