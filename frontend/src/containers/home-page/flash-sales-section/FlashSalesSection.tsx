import React from 'react';

import { ProductCard } from '@/components';
import { Product } from '@/types';
import CountDown from './components/CountDown';

interface FlashSalesSectionProps {
  data: Product[];
}

const FlashSalesSection: React.FC<FlashSalesSectionProps> = ({ data }) => {
  return (
    <section className="my-10">
      <div className="mb-6 flex items-center gap-2 text-secondary">
        <div className="relative h-10 w-5">
          <div className="absolute left-0 top-0 h-10 w-5 rounded bg-secondary" />
        </div>
        <p>Today’s</p>
      </div>
      <div className="mb-2 flex gap-20">
        <h3>Flash Sales</h3>
        <CountDown time={212270} />
      </div>
      <div className="flex gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSalesSection;
