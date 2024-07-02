import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { Product } from '@/types';

type CartItem = {
  quantity: number;
  product: Product;
};

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: Product) => void;
  remove: (idProduct: number) => void;
  removeAll: () => void;
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        count: () => {
          const { cart } = get();
          if (cart.length)
            return cart
              .map((item) => item.quantity)
              .reduce((prev, curr) => prev + curr);
          return 0;
        },
        add: (product: Product) => {
          const { cart } = get();
          const updatedCart = updateCart(product, cart);
          set({ cart: updatedCart });
        },
        remove: (idProduct: number) => {
          const { cart } = get();
          const updatedCart = removeCart(idProduct, cart);
          set({ cart: updatedCart });
        },
        removeAll: () => set({ cart: [] }),
      }),
      {
        name: 'cart',
      },
    ),
  ),
);

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const cartItem: CartItem = { product, quantity: 1 };

  const productOnCart = cart
    .map((item) => item.product.id)
    .includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.product.id === product.id)
        return { product: item.product, quantity: item.quantity + 1 };
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.product.id === idProduct)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    })
    .filter((item) => {
      return item.quantity;
    });
}
