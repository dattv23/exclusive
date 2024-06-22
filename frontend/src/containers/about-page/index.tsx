import { useTranslations } from 'next-intl';
import Image from 'next/image';

import {
  CustomerServiceIcon,
  DeliveryIcon,
  GroupIcon,
  InstagramIcon,
  LinkedinIcon,
  SaleIcon,
  SecureIcon,
  ShopIcon,
  ShoppingBagIcon,
  TwitterIcon,
} from '@/components/Icons';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  const t = useTranslations('AboutPage');
  return (
    <main className="container mx-auto mb-32 p-4">
      <div className="mb-32 flex flex-col items-center md:flex-row">
        <div className="mb-32 md:mb-0 md:w-1/2">
          <h1 className="mb-10 text-3xl font-bold">{t('Our Story')}</h1>
          <p className="mb-4 text-zinc-700">
            {t(
              'Launced in 2015, Exclusive is South Asias premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.',
            )}
          </p>
          <p className="text-zinc-700">
            {t(
              'Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.',
            )}
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={'/images/abouts/About.png'}
            alt="About"
            width={919}
            height={756}
          />
        </div>
      </div>
      <div className="mb-32 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center rounded-lg border p-4">
          <ShopIcon />
          <h2 className="text-xl font-bold">10.5k</h2>
          <p className="text-zinc-600">{t('Sellers active our site')}</p>
        </div>
        <div className="flex flex-col items-center rounded-lg border bg-red-500 p-4 text-white">
          <SaleIcon />
          <h2 className="text-xl font-bold">33k</h2>
          <p>{t('Monthly Product Sale')}</p>
        </div>
        <div className="flex flex-col items-center rounded-lg border p-4">
          <ShoppingBagIcon />
          <h2 className="text-xl font-bold">45.5k</h2>
          <p className="text-zinc-600">{t('Customer active in our site')}</p>
        </div>
        <div className="flex flex-col items-center rounded-lg border p-4">
          <GroupIcon />
          <h2 className="text-xl font-bold">25k</h2>
          <p className="text-zinc-600">{t('Annual gross sale in our site')}</p>
        </div>
      </div>
      <div className="mb-32 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <Image
            src={'/images/abouts/Tom Cruise.png'}
            alt="Tom Cruise"
            width={236}
            height={391}
          />
          <h3 className="text-xl font-bold">Tom Cruise</h3>
          <p className="text-zinc-600">{t('Founder & Chairman')}</p>
          <div className="mt-2 flex space-x-0">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={'/images/abouts/Emma Watson.png'}
            alt="Emma Watson"
            width={294}
            height={397}
          />
          <h3 className="text-xl font-bold">Emma Watson</h3>
          <p className="text-zinc-600">{t('Managing Director')}</p>
          <div className="mt-2 flex space-x-2">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={'/images/abouts/Will Smith.png'}
            alt="Will Smith"
            width={326}
            height={397}
          />
          <h3 className="text-xl font-bold">Will Smith</h3>
          <p className="text-zinc-600">{t('Product Designer')}</p>
          <div className="mt-2 flex space-x-2">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around border-t pt-4 text-center md:flex-row">
        <div className="mb-32 flex flex-col items-center md:mb-0">
          <DeliveryIcon />
          <p className="font-bold">{t('FREE AND FAST DELIVERY')}</p>
          <p className="text-zinc-600">
            {t('Free delivery for all orders over $140')}
          </p>
        </div>
        <div className="mb-32 flex flex-col items-center md:mb-0">
          <CustomerServiceIcon />
          <p className="font-bold">{t('CUSTOMER SERVICE')}</p>
          <p className="text-zinc-600">{t('Friendly customer support')}</p>
        </div>
        <div className="flex flex-col items-center">
          <SecureIcon />
          <p className="font-bold">{t('MONEY BACK GUARANTEE')}</p>
          <p className="text-zinc-600">{t('We return money within 30 days')}</p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
