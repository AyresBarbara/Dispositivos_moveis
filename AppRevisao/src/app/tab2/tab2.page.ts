import { Component } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  livroFavorito: any = null;

  constructor(private storage: DataStorageService) {}

  async ngOnInit(){
    this.livroFavorito = await this.storage.getFavoriteBook();
  }
}
