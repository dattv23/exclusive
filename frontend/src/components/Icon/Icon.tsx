import Image from 'next/image';
import React from 'react';

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <Image src={src} width={24} height={24} alt={alt} />;
};

export default Icon;
