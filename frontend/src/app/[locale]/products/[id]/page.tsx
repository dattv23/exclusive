import React, { FC } from 'react';

interface DetailPageProps {
  params: { id: string };
}

const DetailPage: FC<DetailPageProps> = ({ params }) => {
  return (
    <main>
      <h1 className="text-4xl font-bold text-black">{`Detail id:${params.id}`}</h1>
    </main>
  );
};

export default DetailPage;
