import dynamic from 'next/dynamic';
import React from 'react';

const ContactPage = dynamic(() => import('@/containers/contact-page'));

const Contact: React.FC = () => {
  return <ContactPage />;
};

export default Contact;
