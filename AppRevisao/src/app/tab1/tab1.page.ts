import { Component } from '@angular/core';
import { PotterApiService } from '../services/potter-api.service';
import { DataStorageService } from '../services/data-storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  livros: any[] = [];
  livroSelecionado: any = null;

  constructor(
    private potterApi: PotterApiService,
    private storage: DataStorageService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit(){
    this.potterApi.getBooks().subscribe(data =>{
      this.livros = data;
    })
  }
  mostrarDetalhes(livro: any){
    this.livroSelecionado = livro;
  }
  voltarLista(){
    this.livroSelecionado = null;
  }
  async salvarFavorito(){
    await this.storage.addFavoriteBook(this.livroSelecionado);

    const toast = await this.toastCtrl.create({
      message: 'Livro Favoritado',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

}
