import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

// Define the Product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Mock Data for Products
const PRODUCT_DATA: Product[] = [
  { id: 1, name: 'Apple', price: 1.5, quantity: 100, image: 'assets/apple.png' },
  { id: 2, name: 'Banana', price: 1.0, quantity: 200, image: 'assets/banana.png' },
];

@Component({
  selector: 'app-products',
    standalone: false,

  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'actions'];
  dataSource = new MatTableDataSource<Product>(PRODUCT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // Attach paginator to data source
    this.dataSource.paginator = this.paginator;
  }

  // Open dialog to add a new product
  addProduct() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: { isEdit: false }, // Pass data to dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newProduct: Product = { id: Date.now(), ...result, image: 'assets/default.png' };
        this.dataSource.data = [...this.dataSource.data, newProduct];
      }
    });
  }

  // Open dialog to edit an existing product
  editProduct(product: Product) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: { isEdit: true, product }, // Pass product to edit
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedData = this.dataSource.data.map((p) =>
          p.id === product.id ? { ...p, ...result } : p
        );
        this.dataSource.data = updatedData;
      }
    });
  }

  // Delete a product from the table
  deleteProduct(product: Product) {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      this.dataSource.data = this.dataSource.data.filter((p) => p.id !== product.id);
    }
  }

  // Apply a filter to the table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
