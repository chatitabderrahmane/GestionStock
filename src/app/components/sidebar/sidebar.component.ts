import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { icon: 'home', title: 'Dashboard', link: '/' },
    { icon: 'shopping_cart', title: 'Products', link: '/products' },
    { icon: 'inventory_2', title: 'Inventory', link: '/inventory' },
    { icon: 'trending_up', title: 'Analytics', link: '/analytics' },
    { icon: 'settings', title: 'Settings', link: '/settings' }
  ];
}
