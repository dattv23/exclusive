'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Product } from '@/types';
import { cn } from '@/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/Icons';
import { ProductCard } from '@/components/Card';
import { CountDown } from '@/components';

interface FlashSalesSectionProps {
  data: Product[];
}

const FlashSalesSection: React.FC<FlashSalesSectionProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const t = useTranslations('FlashSalesSection');

  return (
    <section className="my-10">
      <div className="mb-6 flex items-center gap-2 text-secondary">
        <div className="relative h-10 w-5">
          <div className="absolute left-0 top-0 h-10 w-5 rounded bg-secondary" />
        </div>
        <p>{t('Today’s')}</p>
      </div>
      <div className="mb-2 flex justify-between gap-20">
        <div className="flex gap-4">
          <h3>{t('Flash Sales')}</h3>
          <CountDown time={212270} />
        </div>
        <div className="flex gap-2">
          <button
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full bg-[#ccc] p-2',
              currentIndex === 0 && 'opacity-10',
            )}
            onClick={() => setCurrentIndex((pre) => pre - 1)}
            disabled={currentIndex == 0}
          >
            <ArrowLeftIcon />
          </button>
          <button
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full bg-[#ccc] p-2',
              currentIndex === data.length - 4 && 'opacity-10',
            )}
            onClick={() => setCurrentIndex((pre) => pre + 1)}
            disabled={currentIndex == data.length - 4}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        {data.slice(currentIndex, currentIndex + 4).map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSalesSection;
