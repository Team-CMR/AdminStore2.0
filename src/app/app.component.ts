import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'AdminStore';
  menu: string;
  customGrid: string;
  constructor(public sanitizer: DomSanitizer) {
    this.menu = '/assets/menu.css';
    this.customGrid = '/assets/custom-grid.css';
  }
  
}

