import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Progetti', url: '/folder/Projects', icon: 'file-tray-full' },
    { title: 'Rilievi', url: '/folder/Rilievi', icon: 'earth' },
    { title: 'Fotografia', url: '/folder/Photo', icon: 'camera' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },

  ];
  constructor() {}
}
