import React from 'react';

import { Category } from '@/types';
import { CategoryCard } from '@/components/Card';

type CategoryListProps = {
  data: Category[];
};

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  return (
    <div className="flex w-full gap-5">
      {data.map((item) => (
        <CategoryCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default CategoryList;
