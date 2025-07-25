import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product-editor';
  isShowModal: boolean = false;

  setShowModal(): void {
    this.isShowModal = true;
  }
}
