import React, { FC } from 'react';

type ProductDetailPageProps = {
  params: { id: string };
};

const ProductDetailPage: FC<ProductDetailPageProps> = ({ params }) => {
  return (
    <main>
      <h1 className="text-4xl font-bold text-black">{`Detail id:${params.id}`}</h1>
    </main>
  );
};

export default ProductDetailPage;
