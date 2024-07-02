import { ProductList } from '@/components';
import { envServerConfig } from '@/lib/env';
import React from 'react';

async function getData() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/products/all`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const ProductListPage: React.FC = async () => {
  const res = await getData();
  return (
    <main>
      <ProductList data={res.data} />
    </main>
  );
};

export default ProductListPage;
