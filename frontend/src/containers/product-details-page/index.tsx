import { promises as fs } from 'fs';

import ProductDetailForm from '@/components/Forms/ProductDetailForm';
import React from 'react';
import { Cart } from '@/types';

const ProductDetailPage: React.FC = async () => {
  const fileDataCart = await fs.readFile(
    process.cwd() + '/src/mocks/cart.json',
    'utf8',
  );
  const itemsList: Cart[] = JSON.parse(fileDataCart);
  return (
    <main>
      <ProductDetailForm data={itemsList} />
    </main>
  );
};

export default ProductDetailPage;
