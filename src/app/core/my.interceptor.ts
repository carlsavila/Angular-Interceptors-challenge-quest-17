import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { LoaderService } from "./loader.service";

@Injectable()
export class myInterceptor implements HttpInterceptor {
    svcloader = inject(LoaderService)

    //svcloader.isLoading$
    timerStart = new Date().getTime();
    timerStop!: number;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("URL intercepté ", req.urlWithParams);
        const start = new Date().getTime();
      
        return next.handle(req).pipe(
            tap((response) => {
                if (response instanceof HttpResponse) {
                    console.log("Réponse de demande HTTP : ", this.timerStop - this.timerStart)
                }
            })
        );
    }

}