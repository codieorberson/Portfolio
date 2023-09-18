import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthcheckService {

  private baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  startHealthCheck() {
    interval(5 * 60 * 1000)
      .pipe(
        startWith(0),
        switchMap(() => this.httpClient.get(`${this.baseUrl}/HealthCheck`))
      )
      .subscribe(
        response => {
          console.log('Backend is healthy:', response);
        },
        error => {
          console.error('Error pinging backend:', error);
        }
      );
  }

}
