import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionStockFrontend';
  isSidebarOpened = true;

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
}
