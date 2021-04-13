import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products, Product } from '../shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  images = [
    {
      path: '../../assets/1.jpg',
    },
    {
      path: '../../assets/2.jpg',
    },
    {
      path: '../../assets/3.jpg',
    },
    {
      path: '../../assets/4.jpg',
    },
  ];
  products: Product[] = [];
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.productService.getAllProducts(8).subscribe((res: any) => {
        console.log(res);
        this.products = res;
        this.loading = false;
      });
    }, 1000);
  }
}
