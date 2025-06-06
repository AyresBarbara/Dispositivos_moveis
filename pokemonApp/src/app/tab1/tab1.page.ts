import { Component } from '@angular/core';
import { PokeApiService } from '../service/poke-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  valorInputCEP = '';
  pokemon = {
    "name": ''
  }

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  consultarCEP(){
    console.log(this.valorInputCEP);

    console.log(this.pokeApiService.getPokeApi());

    this.pokeApiService.getPokeApi().subscribe((value)=>{
      console.log(value);
      this.pokemon.name =JSON.parse(JSON.stringify(value))['name'];
    })
  }
}
