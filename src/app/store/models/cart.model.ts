import { IProduct } from 'src/types/product.type';

export default interface ICartModel {
  id?: string;
  products: Array<IProduct>;
}
