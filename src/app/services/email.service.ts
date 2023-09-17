import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmailMessage } from '../models/EmailMessage';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  SendQuestion(message: EmailMessage) : Observable<boolean> {
    const url = `${this.baseUrl}/Email/SendQuestion`;
    return this.httpClient.post<boolean>(url, message);
  }
}
