import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Progetti', url: '/projects', icon: 'file-tray-full' },
    { title: 'Rilievi', url: '/folder/Rilievi', icon: 'earth' },
    { title: 'Fotografia', url: '/folder/Photo', icon: 'camera' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Developer', url: '/developer', icon: 'archive' },
  ];


  public projects = [
    { title: 'Progetto 1', url: '/folder/Projects/01', icon: 'none' },
    { title: 'Progetto 2', url: '/folder/Projects/02', icon: 'none' },
    { title: 'Progetto 3', url: '/folder/Projects/03', icon: 'none' },
  ];

  constructor() {}


  changeMenuItems() {
    console.log('change menu animation');
    // this.appPages = this.projects;
  }
}
