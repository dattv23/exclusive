import React from 'react';

interface ICategoryProps {
  params: { category: string; locale: string };
}

const CategoryPage: React.FC<ICategoryProps> = ({ params }) => {
  return <div>Category {params.category}</div>;
};
export default CategoryPage;
