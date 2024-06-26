import React from 'react';

type CategoryPageProps = {
  params: { slug: string };
};

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  return (
    <main>
      <h1 className="text-4xl font-bold text-black">{`Category id:${params.slug}`}</h1>
    </main>
  );
};

export default CategoryPage;
