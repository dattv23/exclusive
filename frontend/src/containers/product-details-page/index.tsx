import { promises as fs } from 'fs';
import React from 'react';

import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Product } from '@/types';
import BestSellerSection from '../product-details-page/best-seller-section';
import { ProductDetailList } from '@/components';
import { Button } from '@/components/Button';
import Link from 'next/link';

const ProductDetailPage: React.FC = async () => {
  const t = await getTranslations('ProductDetailPage');

  const fileDataProduct = await fs.readFile(
    process.cwd() + '/src/mocks/products.json',
    'utf8',
  );
  const products: Product[] = JSON.parse(fileDataProduct);

  return (
    <main className="py-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center bg-[#f5f5f5] px-9 py-10"
            >
              <Image
                src={'/images/products/fantech.png'}
                alt="fantech"
                width={134}
                height={94}
              />
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9">
          <Image
            src={'/images/products/fantech.png'}
            alt="fantech"
            width={446}
            height={315}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
          <div className="mb-2 flex items-center">
            <div className="flex items-center text-yellow-500">
              <span>★★★★★</span>
            </div>
            <span className="text-muted-foreground ml-2">(150 Reviews)</span>
            <span className="ml-2 text-green-500">{t('In Stock')}</span>
          </div>
          <p className="mb-4 text-2xl font-bold">$192.00</p>
          <p className="text-muted-foreground mb-4">{t('Description')}</p>
          <div className="min-w-full divide-y">
            <Button>
              <Link href={'/cart'}>{t('buyNow')}</Link>
            </Button>
          </div>
          <ProductDetailList />
        </div>
      </div>
      <div className="mt-20 flex items-center gap-2 text-secondary">
        <div className="relative h-10 w-5">
          <div className="absolute left-0 top-0 h-10 w-5 rounded bg-secondary"></div>
        </div>
        <p>{t('Related Item')}</p>
      </div>
      <BestSellerSection data={products.slice(0, 4)} />
      <hr />
    </main>
  );
};

export default ProductDetailPage;
