import { useTranslations } from 'next-intl';
import React from 'react';

import { PhoneIcon } from '@/components/Icons';
import { MailIcon } from '@/components/Icons';
import { ContactForm } from '@/components';
interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  const t = useTranslations('ContactPage');
  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full rounded-lg border p-6 shadow-md md:w-1/2">
          <div className="mb-6 flex items-start">
            <PhoneIcon className="mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{t('Call To Us')}</h2>
              <p className="mt-1">
                {t('We are available 24/7, 7 days a week')}
              </p>
              <p>{t('Phone: +8801611112222')}</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="mb-6 flex items-start">
            <MailIcon className="mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{t('Write To Us')}</h2>
              <p className="mt-1">
                {t('Fill out our form and we will contact you within 24 hours')}
              </p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
