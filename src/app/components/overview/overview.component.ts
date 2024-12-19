import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: false,
  
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  dashboardCards = [
    { title: 'Total Sales', value: '$500,000' },
    { title: 'Inventory Level', value: '1200 items' },
    { title: 'Customers Today', value: '230' }
  ];
}
