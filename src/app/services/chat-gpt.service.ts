import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  private baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  GetAnswer(question: string) : Observable<string> {
    const url = `${this.baseUrl}/api/v1/ChatGpt/GetFineTuneAnswer`;
    const httpOptions = {
      params: new HttpParams().set('question', question),
      responseType: 'text' as 'json'
    };
    return this.httpClient.get<string>(url, httpOptions);
  }
}
