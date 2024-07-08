import { HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { tap } from "rxjs";


export const logInterceptor: HttpInterceptorFn = (
    req, next
) => {    
    const timerStart = new Date().getTime();
    let timerStop: number;

    console.log("Demande HTTP interceptée : ", req.urlWithParams);

    return next(req).pipe(
        tap((response) => {
            if (response instanceof HttpResponse) {
                timerStop = new Date().getTime() - timerStart;
                console.log("Delay de REPONSE à la demande : ", timerStop);
            }
        })
    )
}
