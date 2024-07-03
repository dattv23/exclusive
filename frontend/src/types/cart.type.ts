import { Product } from './product.type';

export type CartItem = {
  product: Product;
  quantity: number;
};

// Define the target type for the mapped cart items
type MappedCartItem = {
  productId: string;
  quantity: number;
};

// Function to map CartItem array to an array of MappedCartItem
export const mapCartToMappedCartItem = (cart: CartItem[]): MappedCartItem[] => {
  return cart.map((item) => ({
    productId: item.product.id,
    quantity: item.quantity,
  }));
};
