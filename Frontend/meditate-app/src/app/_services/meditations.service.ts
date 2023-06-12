import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseUrl = 'http://localhost:3000/api/meditations_categories';

const httpOptions = { headers: new HttpHeaders({'content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class MeditationsService {

  constructor(private http: HttpClient) { }

  //GET ALL
  getMeditations(): Observable<any> {
    return this.http.get(baseUrl, {responseType: 'json'});
  }

  //GET BY ID
  getMeditation(id: number): Observable<any> {
     return this.http.get(`${baseUrl}/${id}`);
  }
  
}
