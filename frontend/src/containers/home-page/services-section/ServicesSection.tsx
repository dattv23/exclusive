import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import {
  CustomerServiceIcon,
  DeliveryIcon,
  SecureIcon,
} from '@/components/Icons';

type Service = {
  id: number;
  name: string;
  description: string;
  icon: ReactNode;
};

const ServicesSection = () => {
  const t = useTranslations('ServicesSection');
  const listService: Service[] = [
    {
      id: 1,
      name: t('FREE AND FAST DELIVERY'),
      description: t('Free delivery for all orders over $140'),
      icon: <DeliveryIcon />,
    },
    {
      id: 2,
      name: t('24/7 CUSTOMER SERVICE'),
      description: t('Friendly 24/7 customer support'),
      icon: <CustomerServiceIcon />,
    },
    {
      id: 3,
      name: t('MONEY BACK GUARANTEE'),
      description: t('We return money within 30 days'),
      icon: <SecureIcon />,
    },
  ];
  return (
    <section className="my-28 flex justify-center gap-20">
      {listService.map((item) => (
        <div className="flex flex-col items-center gap-6" key={item.id}>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c1c1c1]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
              {item.icon}
            </div>
          </div>
          <div className="text-center">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
