import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { logInterceptor } from './core/log.interceptor';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './core/loader.service';

type apiDataType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quest17-Interceptor';

  //constructor( private http: HttpClient ) {}
  http: HttpClient = inject(HttpClient);

  loader: LoaderService = inject(LoaderService);

  isLoading$ = this.loader.isLoading$;

  apiData?: apiDataType;
  getApiData(): void {
    this.loader.show()
    // httpClient.get instead of fetch
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      response => {
        this.apiData = response as apiDataType;
        this.loader.hide();
      }
      )
      

  }

  ngOnInit() {
    
  }
  
}
