import { Product } from './product.type';

export type Cart = {
  id: number;
  product: Product;
  quantity: number;
};
