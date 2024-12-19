import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cols = window.innerWidth > 600 ? 3 : 1; // Adjust columns based on screen size

  cards = [
    { title: 'Total Sales', value: '$20,000' },
    { title: 'Inventory', value: '150 Items' },
    { title: 'New Orders', value: '75' }
  ];
   constructor() {  window.onresize = () => {
    this.cols = window.innerWidth > 600 ? 3 : 1;
  };}

  ngOnInit(): void {

  }
}

