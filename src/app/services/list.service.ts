import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../People';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/peoples';

  constructor(private http: HttpClient) {}

  remove(id: number) {
    return this.http.delete<People>(`${this.apiUrl}/${id}`);
  }
  getAll(): Observable<People[]> {
    return this.http.get<People[]>(this.apiUrl);
  }
  getItem(id: number): Observable<People> {
    return this.http.get<People>(`${this.apiUrl}/${id}`);
  }
}
