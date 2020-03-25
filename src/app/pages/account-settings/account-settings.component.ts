import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public serviceSettings: SettingsService
  ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  changeColor(color: string, Link: any) {

    this.aplicarCheck(Link);

    this.serviceSettings.setTheme(color);

  }

  aplicarCheck(Link: any) {

    const selectores = document.querySelectorAll('.selector');

    selectores.forEach(element => {
      element.classList.remove('working')
    });

    Link.classList.add('working')

  }

  colocarCheck() {
    const selectores = document.querySelectorAll('.selector');
    const color = this.serviceSettings.settings.tema;

    selectores.forEach(element => {
      if (element.getAttribute('data-theme') === color) {

        element.classList.add('working')

      }
    });
  }

}
