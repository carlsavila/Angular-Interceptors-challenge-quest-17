import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { logInterceptor } from './core/log.interceptor';
import { myInterceptor } from './core/my.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([logInterceptor])),
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: myInterceptor, 
      multi: true
    },
  ]
};
