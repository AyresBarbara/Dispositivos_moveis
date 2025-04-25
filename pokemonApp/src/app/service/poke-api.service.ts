import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokeApi(){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
  }
}
