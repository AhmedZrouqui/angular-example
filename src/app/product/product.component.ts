import { Component } from '@angular/core';
import { IProduct } from 'src/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product: IProduct = {
    name: 'zbiksla',
    image_src:
      'https://images.ctfassets.net/3oa8py5argun/4fDsZfba9bXfqSXaRrriXr/b50c12f3495c520f41c577535fe9cd55/Google-Bard.webp?w=1920',
  };
}
