import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';

import { i18n, Locale } from '@/config';
import { Footer, Header } from '@/components';
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exclusive',
  description: 'A e-commerce website',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AntdRegistry>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </AntdRegistry>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
