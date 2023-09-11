import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  private baseUrl = environment.apiUrl;
  private systemPrompt = environment.systemPrompt;
  private fineTuneId =  environment.fineTuneId;
  constructor(private httpClient: HttpClient) { }

  GetAnswer(question: string) : Observable<any> {
    const url = `${this.baseUrl}/ChatGpt/GetFineTuneAnswer`;
    const body = { Question: question, SystemPrompt: this.systemPrompt, Id: this.fineTuneId };
    return this.httpClient.post<any>(url, body);
  }
}
