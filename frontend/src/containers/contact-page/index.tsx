import { MailIcon, PhoneIcon } from '@/components/Icons';
import React from 'react';
import { useTranslations } from 'next-intl';

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

        <div className="w-full rounded-lg border p-6 shadow-md md:w-1/2">
          <form>
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <input
                type="text"
                placeholder="Your Name *"
                className="rounded border p-2"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="rounded border p-2"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="rounded border p-2"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="mb-4 h-32 w-full rounded border p-2"
            ></textarea>
            <button type="submit" className="rounded bg-red-500 p-2 text-white">
              {t('Send Message')}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
