import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../models/Skills';
import { Projects } from '../models/Projects';
import { JobDetails } from '../models/JobDetails';
import { Hobbies } from '../models/Hobbies';
import { About } from '../models/About';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  GetAllSkills() : Observable<Skills[]> {
    const url = `${this.baseUrl}/Profile/GetAllSkills`;
    return this.httpClient.get<Skills[]>(url);
  }

  GetAllProjects() : Observable<Projects[]> {
    const url = `${this.baseUrl}/Profile/GetAllProjects`;
    return this.httpClient.get<Projects[]>(url);
  }

  GetAllJobDetails() : Observable<JobDetails[]> {
    const url = `${this.baseUrl}/Profile/GetAllJobDetails`;
    return this.httpClient.get<JobDetails[]>(url);
  }

  GetAllHobbies() : Observable<Hobbies[]> {
    const url = `${this.baseUrl}/Profile/GetAllHobbies`;
    return this.httpClient.get<Hobbies[]>(url);
  }

  GetAbout() : Observable<About> {
    const url = `${this.baseUrl}/Profile/GetAbout`;
    return this.httpClient.get<About>(url);
  }
}
