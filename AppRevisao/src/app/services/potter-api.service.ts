import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PotterApiService {

  private baseUrl = 'https://potterapi-fedeperin.vercel.app/pt'

  constructor(private http : HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/characters`);
  }
  getHouses(): Observable <any>{
    return this.http.get(`${this.baseUrl}/houses`);
  }
  getSpells(): Observable<any> {
    return this.http.get(`${this.baseUrl}/spells`);
  }
  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/books`);
  }
  
}
