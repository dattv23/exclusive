import dynamic from 'next/dynamic';
import React from 'react';

const AboutPage = dynamic(() => import('@/containers/about-page'));

const About: React.FC = () => {
  return <AboutPage />;
};

export default About;
