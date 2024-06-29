import { Delivery1Icon, Return1Icon } from '@/components/Icons';
import { useTranslations } from 'next-intl';
import React from 'react';

type ProductDetail = {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
};

const ProductDetailList = () => {
  const t = useTranslations('ProductDetailSection');
  const listProductDetail: ProductDetail[] = [
    {
      id: 1,
      name: t('Free Delivery'),
      description: t('Enter your postal code for Delivery Availability'),
      icon: <Delivery1Icon />,
    },
    {
      id: 2,
      name: t('Return Delivery'),
      description: t('Free 30 Days Delivery Returns Details'),
      icon: <Return1Icon />,
    },
  ];
  return (
    <div className=" border-zinc-300 pt-4">
      <div className="mb-2 flex flex-col gap-2">
        {listProductDetail.map((item) => (
          <div className="flex items-center gap-2" key={item.id}>
            {item.icon}
            <div className="text-muted-foreground mb-4">
              <h3 className="mt-2 text-sm">{item.name}</h3>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailList;
