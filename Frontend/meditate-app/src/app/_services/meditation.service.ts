import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeditationService {
  private baseUrl = 'http://localhost:3000/api/meditations'; // Replace with your server URL

  constructor(private http: HttpClient) { }

  createMeditation(meditation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, meditation);
  }

  getMeditations(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMeditation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateMeditation(id: number, meditation: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, meditation);
  }

  deleteMeditation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
