'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { Product } from '@/types';
import { startScore } from '@/utils';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex w-[350px] flex-col gap-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9">
        <Image
          src={data.image}
          width={172}
          height={152}
          alt="product-image"
          className="h-auto w-auto"
        />
        {isHovered && (
          <button className="absolute bottom-0 left-0 right-0 bg-black py-2 text-center text-white hover:text-primary">
            Add To Cart
          </button>
        )}
      </div>
      <div>
        <h4>{data.name}</h4>
        <p className={`${data.discount && 'text-secondary'}`}>
          {data.price - data.price * (data.discount / 100)}${' '}
          {data.discount != 0 && (
            <span className="text-[#cccc] line-through">{data.price}$</span>
          )}
        </p>
        <p>
          {startScore(data.rate)} ({data.number_of_rate})
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
