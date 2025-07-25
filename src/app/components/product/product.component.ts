import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { DataService, Product } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  loading: boolean = false;
  error: string | null = null;
  data: Product | null = null;

  constructor(
    public modalService: ModalService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.error = null;

    this.dataService.getData().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка при загрузке данных';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
