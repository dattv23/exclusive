import { Carousel } from '@/components';
import { Locale } from '@/config';
import { NavItem } from '@/types';
import Link from 'next/link';
import React from 'react';

interface BannerSectionProps {
  locale: Locale;
}

const BannerSection: React.FC<BannerSectionProps> = ({ locale }) => {
  const items: NavItem[] = [
    {
      id: 1,
      name: 'Woman’s Fashion',
      link: `/${locale}/category/1`,
    },
    {
      id: 2,
      name: 'Men’s Fashion',
      link: `/${locale}/category/2`,
    },
    {
      id: 3,
      name: 'Electronics',
      link: `/${locale}/category/3`,
    },
    {
      id: 4,
      name: 'Home & Lifestyle',
      link: `/${locale}/category/4`,
    },
    {
      id: 5,
      name: 'Medicine',
      link: `/${locale}/category/5`,
    },
    {
      id: 6,
      name: 'Sports & Outdoor',
      link: `/${locale}/category/6`,
    },
    {
      id: 7,
      name: 'Baby’s & Toys',
      link: `/${locale}/category/7`,
    },
    {
      id: 8,
      name: 'Groceries & Pets',
      link: `/${locale}/category/8`,
    },
    {
      id: 9,
      name: 'Health & Beauty',
      link: `/${locale}/category/9`,
    },
  ];

  return (
    <section className="flex border-t py-10">
      <div className="flex flex-[0.2] flex-col gap-4">
        {items.map((item) => (
          <Link key={item.id} href={item.link} className="hover:text-primary">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex-[0.8] border-l">
        <div className="px-10">
          <Carousel
            images={[
              '/images/banners/banner-1.jpg',
              '/images/banners/banner-2.jpg',
              '/images/banners/banner-3.jpg',
              '/images/banners/banner-4.jpg',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
