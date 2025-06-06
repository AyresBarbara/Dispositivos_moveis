import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  
  darkMode = false;

  constructor() {
    const temaAtual = localStorage.getItem('tema');
    if (temaAtual === 'dark'){
      this.darkMode = true;
      document.body.classList.add('dark');
    }
  }
  alternarTema() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('tema', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('tema', 'light');
    }
  }
}
