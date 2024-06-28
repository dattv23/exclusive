'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Delivery1Icon, Return1Icon } from '@/components/Icons';
import Link from 'next/link';
import { ProductDetailTable } from '@/components/Tables';
import { Cart } from '@/types';

type ProductDetailFormProps = {
  data: Cart[];
};
const ProductDetailForm: React.FC<ProductDetailFormProps> = ({ data }) => {
  const t = useTranslations('ProductDetailForm');
  const [selectedColour, setSelectedColour] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColourClick = (colour: string) => {
    setSelectedColour(colour);
  };

  return (
    <form className="p-4">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9">
            <Image
              src={'/images/products/fantech.png'}
              alt="fantech"
              width={134}
              height={94}
            />
          </div>
          <div className="relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9">
            <Image
              src={'/images/products/fantech.png'}
              alt="fantech"
              width={134}
              height={94}
            />
          </div>
          <div className="relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9">
            <Image
              src={'/images/products/fantech.png'}
              alt="fantech"
              width={134}
              height={94}
            />
          </div>
          <div className="relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9">
            <Image
              src={'/images/products/fantech.png'}
              alt="fantech"
              width={134}
              height={94}
            />
          </div>
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

          <div className="mb-4">
            <span className="font-bold">{t('Colours')}:</span>
            <div className="mt-2 flex items-center gap-4">
              <button
                type="button"
                className={`h-6 w-6 rounded-full border-4 ${selectedColour === 'red' ? 'border-black' : 'border-zinc-300'} bg-red-500`}
                onClick={() => handleColourClick('red')}
              ></button>
              <button
                type="button"
                className={`h-6 w-6 rounded-full border-4 ${selectedColour === 'black' ? 'border-black' : 'border-zinc-300'} bg-black`}
                onClick={() => handleColourClick('black')}
              ></button>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold">{t('Size')}:</span>
            <div className="mt-2 flex items-center gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  type="button"
                  key={size}
                  className={`rounded border px-4 py-2 ${selectedSize === size ? 'border-black bg-red-500' : 'border-zinc-300'}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center rounded border border-zinc-300">
              <ProductDetailTable data={data} />
            </div>
            <Button>
              <Link href={'/cart'}>{t('buyNow')}</Link>
            </Button>
          </div>
          <div className="border-t border-zinc-300 pt-4">
            <div className="mb-2 flex items-center gap-2">
              <Delivery1Icon />
              <span>{t('Free Delivery')}</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {t('Enter your postal code for Delivery Availability')}
            </p>
            <div className="mb-2 flex items-center gap-2">
              <Return1Icon />
              <span>{t('Return Delivery')}</span>
            </div>
            <p className="text-muted-foreground">
              {t('Free 30 Days Delivery Returns Details')}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex items-center gap-2 text-secondary">
          <div className="relative h-10 w-5">
            <div className="absolute left-0 top-0 h-10 w-5 rounded bg-secondary"></div>
          </div>
          <p>{t('Related Item')}</p>
        </div>
        <div className="mt-10 flex gap-4 overflow-x-auto">
          <div className="w-64 rounded border border-zinc-300 p-4">
            <Image
              src={'/images/products/canon.png'}
              alt="canon"
              width={919}
              height={756}
            />
            <h3 className="mb-2 font-bold">HAVIT HV-G92 Gamepad</h3>
            <div className="mb-2 flex items-center">
              <span className="text-xl font-bold">$120</span>
              <span className="text-muted-foreground ml-2 line-through">
                $160
              </span>
            </div>
            <div className="mb-2 flex items-center text-yellow-500">
              <span>★★★★★</span>
              <span className="text-muted-foreground ml-2">(88)</span>
            </div>
          </div>

          <div className="w-64 rounded border border-zinc-300 p-4">
            <Image
              src={'/images/products/asus.png'}
              alt="asus"
              width={919}
              height={756}
            />
            <h3 className="mb-2 font-bold">AK-900 Wired Keyboard</h3>
            <div className="mb-2 flex items-center">
              <span className="text-xl font-bold">$960</span>
              <span className="text-muted-foreground ml-2 line-through">
                $1160
              </span>
            </div>
            <div className="mb-2 flex items-center text-yellow-500">
              <span>★★★★★</span>
              <span className="text-muted-foreground ml-2">(75)</span>
            </div>
          </div>

          <div className="w-64 rounded border border-zinc-300 p-4">
            <Image
              src={'/images/products/keyboard.png'}
              alt="keyboard"
              width={919}
              height={756}
            />
            <h3 className="mb-2 font-bold">IPS LCD Gaming Monitor</h3>
            <div className="mb-2 flex items-center">
              <span className="text-xl font-bold">$370</span>
              <span className="text-muted-foreground ml-2 line-through">
                $400
              </span>
            </div>
            <div className="mb-2 flex items-center text-yellow-500">
              <span>★★★★★</span>
              <span className="text-muted-foreground ml-2">(99)</span>
            </div>
          </div>

          <div className="w-64 rounded border border-zinc-300 p-4">
            <Image
              src={'/images/products/gamepad.png'}
              alt="gamepad"
              width={919}
              height={756}
            />
            <h3 className="mb-2 font-bold">RGB Liquid CPU Cooler</h3>
            <div className="mb-2 flex items-center">
              <span className="text-xl font-bold">$160</span>
              <span className="text-muted-foreground ml-2 line-through">
                $170
              </span>
            </div>
            <div className="mb-2 flex items-center text-yellow-500">
              <span>★★★★★</span>
              <span className="text-muted-foreground ml-2">(65)</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductDetailForm;
