import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  }

  constructor(@Inject(DOCUMENT) private _doc) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    const settings = JSON.parse(localStorage.getItem('settings'));

    if (settings) {
      // this.settings = JSON.parse(settings);

      this.settings = settings;
      this.setTheme(this.settings.tema);
    } else {
      this.setTheme(this.settings.tema);

    }

  }

  setTheme(tema: string) {

    const url = `assets/css/colors/${tema}.css`;

    // const tema = document.getElementById('tema');

    // tema.setAttribute('href', url);

    this._doc.getElementById('tema').setAttribute('href', url);

    this.settings.tema = tema;
    this.settings.temaUrl = url;

    this.saveSettings();
  }

}

interface Settings {
  temaUrl: string;
  tema: string;
}