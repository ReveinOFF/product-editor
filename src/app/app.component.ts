import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product-editor';

  constructor(public modalService: ModalService) {}
}
