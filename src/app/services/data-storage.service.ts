import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private _storage: Storage | null = null ;

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    this._storage = await this.storage.create();
  }
  async addFavoriteBook(book: any){
    const current = (await this.get('favoritos')) || [];
    current.push(book);
    await this.set('favoritos', current);
  }

  public async set(key : string, value: any){
    await this._storage?.set(key, value);
  }
  public async get(key: string): Promise<any>{
    return await this._storage?.get(key);
  }
  public async remove(key: string){
    await this._storage?.remove(key);
  }
  public async clear(){
    await this._storage?.clear();
  }
  public async getFavoriteBook(): Promise<any[]> {
    const favoritos = await this.get('favoritos');
    return favoritos || [];
  }
  
}
